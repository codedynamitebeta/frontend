import { Collapse, Container, Divider, Grid, ListItemButton } from "@mui/material";
import CustomBreadCrumb from "components/common/Breadcrumb";
import Heading3 from "components/text/Heading3";
import { TopicEntity } from "models/coreService/entity/TopicEntity";
import { SkillLevelEnum } from "models/coreService/enum/SkillLevelEnum";
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Control,
  Controller,
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
  UseFormWatch,
  useFieldArray,
  useForm
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { routes } from "routes/routes";
import { TopicService } from "services/coreService/TopicService";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputTextFieldColumn from "components/common/inputs/InputTextFieldColumn";
import JoySelect from "components/common/JoySelect";
import TitleWithInfoTip from "components/text/TitleWithInfo";
import TextEditor from "components/editor/TextEditor";
import Card from "@mui/joy/Card";
import ParagraphBody from "components/text/ParagraphBody";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Button, { BtnType } from "components/common/buttons/Button";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { ResourceTypeEnum } from "models/coreService/enum/ResourceTypeEnum";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/joy/IconButton";
import EditOffRoundedIcon from "@mui/icons-material/EditOffRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";

import { DragDropContext, Droppable, Draggable, DraggableProvided } from "react-beautiful-dnd";

interface FormData {
  name: string;
  description?: string;
  skillLevel: string;
  topicId: string;
  chapters?: ChapterData[];
}

export interface ChapterData {
  no: number;
  title: string;
  description?: string;
  resources: ChapterResourceData[];
}

export interface ChapterResourceData {
  no: number;
  resourceType: string;
  title: string;
  questionId?: string;
  lessonHtml?: string;
  youtubeVideoUrl?: string;
}

interface ChapterFieldArrayPropsData {
  errors: FieldErrors<FormData>;
  isDragging: boolean;
  field: FieldArrayWithId<FormData, "chapters", "id">;
  removeChapter: UseFieldArrayRemove;
  watch: UseFormWatch<FormData>;

  control: Control<FormData, any>;
  register: UseFormRegister<FormData>;
  parentIndex: number;
  provided: DraggableProvided;
}
interface ChapterResourceFieldArrayPropsData {
  errors: FieldErrors<FormData>;
  control: Control<FormData, any>;
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;

  index: number;
  parentIndex: number;
  isEditting?: boolean;
  removeResource: UseFieldArrayRemove;
}

const CreateCertificateCourse = () => {
  const { t } = useTranslation();
  const [topicList, setTopicList] = useState<TopicEntity[]>([]);
  const [skeleton, setSkeleton] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const breadCrumbData = [
    {
      navLink: routes.admin.dashboard,
      label: "Home"
    },
    {
      navLink: routes.admin.certificate.root,
      label: "Certificate Course Management"
    }
  ];

  const getTopicListData = async () => {
    try {
      const response = await TopicService.getTopics({
        pageNo: 0,
        pageSize: 999999,
        fetchAll: true
      });
      setTopicList(response.topics);

      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      getTopicListData();
      setSkeleton(false);
    };
    fetchData();
  }, []);

  const skillLevelOptions = useMemo(() => {
    return Object.values(SkillLevelEnum).map((skillLevel) => ({
      label: t(skillLevel),
      value: skillLevel
    }));
  }, [t]);

  const schema = useMemo(() => {
    return yup.object().shape({
      name: yup.string().required(t("certificate_course_name_required")),
      description: yup.string(),
      skillLevel: yup.string().required(t("skill_level_required")),
      topicId: yup.string().required(t("topic_required")),
      chapters: yup.array().of(
        yup.object().shape({
          no: yup.number().required(),
          title: yup.string().required(t("chapter_title_required")),
          description: yup.string(),
          resources: yup
            .array()
            .of(
              yup.object().shape({
                no: yup.number().required(),
                resourceType: yup.string().required(),
                title: yup.string().required(t("resource_title_required")),
                questionId: yup.string(),
                lessonHtml: yup.string(),
                youtubeVideoUrl: yup.string()
              })
            )
            .required()
        })
      )
    });
  }, [t]);

  const {
    register,
    control,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "chapters"
  });
  const handleAddNewChapter = () => {
    append({
      no: fields.length,
      title: "",
      resources: []
    });
  };
  const handleDrag = ({ source, destination }: { source: any; destination: any }) => {
    if (destination) {
      move(source.index, destination.index);

      setValue(`chapters.${source.index}.no`, source.index);
      setValue(`chapters.${destination.index}.no`, destination.index);
    }
  };

  const handleRemoveChapter = (index: number) => {
    remove(index);

    const updatedFields = watch("chapters");
    updatedFields?.forEach((field, idx) => {
      setValue(`chapters.${idx}.no`, idx);
    });
  };
  console.log("error:", errors);
  console.log("fields", fields);

  const submitHandler = async (data: any) => {
    console.log("data", data);
  };

  return (
    <>
      <Helmet>
        <title>{t("create_certificate_course")}</title>
      </Helmet>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Container>
          <Box
            sx={{
              paddingLeft: "13px"
            }}
          >
            <CustomBreadCrumb
              breadCrumbData={breadCrumbData}
              lastBreadCrumbLabel='Create Certificate Course'
            />
          </Box>
          <Grid
            container
            spacing={4}
            sx={{
              padding: "0 20px"
            }}
          >
            <Grid item xs={12}>
              <Heading3 translate-key='create_certificate_course_title'>
                {t("create_certificate_course_title").toUpperCase()}
              </Heading3>
            </Grid>

            <Grid item xs={12}>
              <Card
                variant='soft'
                color='primary'
                sx={{
                  padding: "10px"
                }}
              >
                <ParagraphBody fontWeight={"600"} colorname='--blue-2'>
                  {t("common_general").toUpperCase()}
                </ParagraphBody>
              </Card>
            </Grid>
            <Grid item sm={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    defaultValue=''
                    control={control}
                    name='name'
                    render={({ field: { ref, ...field } }) => (
                      <InputTextFieldColumn
                        useDefaultTitleStyle
                        error={Boolean(errors?.name)}
                        errorMessage={errors.name?.message}
                        title={`${t("certificate_course_name")}`}
                        type='text'
                        placeholder={t("enter_certificate_course_name")}
                        titleRequired={true}
                        translation-key={[
                          "certificate_course_name",
                          "enter_certificate_course_name"
                        ]}
                        inputRef={ref}
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TitleWithInfoTip
                    translation-key='certificate_course_skill_level_title'
                    title={`${t("certificate_course_skill_level_title")} `}
                    titleRequired
                    fontSize='12px'
                    color='var(--gray-60)'
                    gutterBottom
                    fontWeight='600'
                  />
                  <Controller
                    name='skillLevel'
                    control={control}
                    defaultValue={skillLevelOptions[0].value}
                    render={({ field: { onChange, value } }) => (
                      <JoySelect value={value} onChange={onChange} options={skillLevelOptions} />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TitleWithInfoTip
                    translation-key='certificate_course_topic_title'
                    title={`${t("certificate_course_topic_title")} `}
                    titleRequired
                    fontSize='12px'
                    color='var(--gray-60)'
                    gutterBottom
                    fontWeight='600'
                  />
                  <Controller
                    name='topicId'
                    control={control}
                    defaultValue={topicList[0]?.topicId}
                    render={({ field: { onChange, value } }) => (
                      <JoySelect
                        value={value}
                        onChange={onChange}
                        options={topicList.map((topic) => ({
                          label: topic.name,
                          value: topic.topicId
                        }))}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} md={6}>
              <TitleWithInfoTip
                translation-key='certificate_course_description_title'
                title={`${t("certificate_course_description_title")} `}
                titleRequired
                fontSize='12px'
                color='var(--gray-60)'
                gutterBottom
                fontWeight='600'
              />
              <Controller
                defaultValue=''
                control={control}
                name='description'
                render={({ field }) => (
                  <TextEditor
                    title={t("certificate_course_description_title")}
                    openDialog
                    roundedBorder={true}
                    error={Boolean(errors?.description)}
                    placeholder={`${t("enter_certificate_course_description_title")}...`}
                    required
                    translation-key='enter_certificate_course_description_title'
                    maxLines={10}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Card
                variant='soft'
                color='primary'
                sx={{
                  padding: "10px",
                  marginTop: "30px"
                }}
              >
                <ParagraphBody fontWeight={"600"} colorname='--blue-2'>
                  {t("common_detail").toUpperCase()}
                </ParagraphBody>
              </Card>

              <Button
                margin='10px 0'
                variant='outlined'
                colorName={"var(--blue-selected)"}
                borderRadius='12px'
                startIcon={
                  <AddCircleRoundedIcon
                    sx={{
                      color: "var(--blue-selected)",
                      fontSize: "12px"
                    }}
                  />
                }
                onClick={handleAddNewChapter}
              >
                <ParagraphBody fontSize={"12px"} fontWeight={"500"} colorname='--blue-light-1'>
                  {t("common_add_chapter")}
                </ParagraphBody>
              </Button>

              <Button
                margin='10px 0 10px 10px'
                variant={isDragging ? "contained" : "outlined"}
                borderRadius='12px'
                startIcon={
                  <DragIndicatorRoundedIcon
                    sx={{
                      color: isDragging ? "var(--ghost-white)" : "var(--blue-selected)",
                      fontSize: "12px"
                    }}
                  />
                }
                onClick={() => setIsDragging(!isDragging)}
                boxShadow='0'
              >
                <ParagraphBody
                  fontSize={"12px"}
                  fontWeight={"500"}
                  colorname={!isDragging ? "--blue-selected" : "--ghost-white"}
                >
                  {!isDragging ? t("enable_drag_drop_chapter") : t("disable_drag_drop_chapter")}
                </ParagraphBody>
              </Button>
            </Grid>

            <Grid item xs={12}>
              <DragDropContext onDragEnd={handleDrag}>
                <Droppable droppableId='chapter'>
                  {(provided) => (
                    <Stack spacing={2} {...provided.droppableProps} ref={provided.innerRef}>
                      {fields.map((field, index) => {
                        return (
                          <Draggable
                            key={`chapters[${index}]`}
                            draggableId={`item-${index}`}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                key={field.id}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                              >
                                <ChapterItem
                                  errors={errors}
                                  watch={watch}
                                  isDragging={isDragging}
                                  provided={provided}
                                  field={field}
                                  removeChapter={() => handleRemoveChapter(index)}
                                  parentIndex={index}
                                  {...{ control, register }}
                                />
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                    </Stack>
                  )}
                </Droppable>
              </DragDropContext>
            </Grid>

            <Grid item xs={12}>
              <Divider />

              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                justifyContent={"center"}
                mt={2}
              >
                <Button btnType={BtnType.Outlined}>
                  <ParagraphBody fontWeight={"600"} colorname='--eerie-black'>
                    {t("common_cancel")}
                  </ParagraphBody>
                </Button>
                <Button btnType={BtnType.Primary} type='submit'>
                  <ParagraphBody fontWeight={"600"} colorname='--white'>
                    {t("common_save")}
                  </ParagraphBody>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </form>
    </>
  );
};

const ChapterItem = (props: ChapterFieldArrayPropsData) => {
  const { t } = useTranslation();
  const {
    field,
    removeChapter,
    control,
    register,
    parentIndex,
    provided,
    isDragging,
    watch,
    errors
  } = props;
  const [open, setOpen] = useState(false);
  const [isEditting, setIsEditting] = useState(true);
  const { fields, append, remove } = useFieldArray({
    control,
    name: `chapters.${parentIndex}.resources`
  });

  const handleNewResource = () => {
    append({
      no: fields.length,
      resourceType: ResourceTypeEnum.LESSON,
      title: "",
      lessonHtml: "",
      questionId: "",
      youtubeVideoUrl: ""
    });
  };
  const [chapterName, setChapterName] = useState<string>("Chapter " + parentIndex);

  useEffect(() => {
    if (isDragging) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isDragging]);

  useEffect(() => {
    const tempChapterName = watch(`chapters.${parentIndex}.title`);
    if (tempChapterName && tempChapterName !== "") {
      setChapterName(tempChapterName);
    } else setChapterName("Chapter " + parentIndex);
  }, [watch(`chapters.${parentIndex}.title`)]);

  useEffect(() => {
    if (isEditting && !isDragging) {
      setOpen(true);
    }
  }, [isEditting]);

  return (
    <>
      {!isDragging && (
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          marginBottom={"10px"}
        >
          <IconButton
            variant={isEditting ? "soft" : "solid"}
            onClick={() => {
              setIsEditting(!isEditting);
            }}
            color='primary'
          >
            {isEditting ? <EditOffRoundedIcon /> : <EditRoundedIcon />}
          </IconButton>
          <IconButton
            variant='soft'
            sx={{
              marginLeft: "10px"
            }}
            color='danger'
            onClick={() => {
              removeChapter();
            }}
          >
            <DeleteForeverRoundedIcon />
          </IconButton>
        </Box>
      )}
      <Stack
        direction={"row"}
        display={"flex"}
        alignItems={"center"}
        spacing={1}
        flex={1}
        sx={{ width: "100%" }}
      >
        {isDragging && (
          <div {...provided.dragHandleProps}>
            <DragIndicatorRoundedIcon />
          </div>
        )}
        <Card
          variant='soft'
          color='neutral'
          sx={{
            flexGrow: 1,
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            "&:hover": {
              cursor: isDragging ? "" : "pointer",
              backgroundColor: "var(--blue-light-4)"
            }
          }}
          onClick={() => {
            !isDragging && setOpen(!open);
          }}
          translation-key='question_management_answer'
        >
          <ParagraphBody fontWeight={"600"} colorname='--eerie-black'>
            {chapterName}
          </ParagraphBody>

          {open ? <ArrowDropDownRoundedIcon /> : <ArrowDropUpRoundedIcon />}
        </Card>
      </Stack>
      <Collapse in={open} timeout='auto'>
        {isEditting && (
          <Grid
            container
            spacing={2}
            sx={{
              marginBottom: "40px",
              marginTop: "5px"
            }}
          >
            <Grid item sm={12} md={6}>
              <Controller
                control={control}
                name={`chapters.${parentIndex}.title`}
                render={({ field: { ref, ...field } }) => (
                  <InputTextFieldColumn
                    error={Boolean(errors?.chapters?.[parentIndex]?.title)}
                    errorMessage={errors?.chapters?.[parentIndex]?.title?.message}
                    useDefaultTitleStyle
                    title={`${"Chapter Title"}`}
                    inputRef={ref}
                    type='text'
                    placeholder={"Enter Chapter Title"}
                    titleRequired={true}
                    translation-key={["chapter_title", "enter_chapter_title"]}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TitleWithInfoTip
                translation-key='chapter_description_title'
                title={`${"Chapter Description"} `}
                titleRequired
                fontSize='12px'
                color='var(--gray-60)'
                gutterBottom
                fontWeight='600'
              />
              <Controller
                control={control}
                name={`chapters.${parentIndex}.description`}
                render={({ field }) => (
                  <TextEditor
                    title={"Chapter Description"}
                    openDialog
                    roundedBorder={true}
                    error={false}
                    placeholder={"Enter Chapter Description"}
                    required
                    translation-key='enter_chapter_description'
                    maxLines={10}
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
        )}
        {isEditting && (
          <Button
            margin='5px 0'
            variant='outlined'
            colorName={"var(--blue-light)"}
            borderRadius='12px'
            startIcon={<AddCircleRoundedIcon />}
            onClick={handleNewResource}
          >
            <ParagraphBody fontSize={"12px"} fontWeight={"500"} colorname='--blue-light-1'>
              {t("add_chapter_resource")}
            </ParagraphBody>
          </Button>
        )}
        {fields.length !== 0 && (
          <Card
            sx={{
              marginTop: "10px"
            }}
          >
            <Stack spacing={{ xs: 4 }} useFlexGap>
              {fields.map((field, index) => (
                <React.Fragment key={field.id}>
                  <ChapterResourceItem
                    errors={errors}
                    watch={watch}
                    parentIndex={parentIndex}
                    isEditting={isEditting}
                    index={index}
                    removeResource={() => remove(index)}
                    {...{ control, register }}
                  />
                  <Divider />
                </React.Fragment>
              ))}
            </Stack>
          </Card>
        )}
      </Collapse>
    </>
  );
};

const ChapterResourceItem = (props: ChapterResourceFieldArrayPropsData) => {
  const { isEditting, removeResource, index, control, register, parentIndex, watch, errors } =
    props;

  const { t } = useTranslation();
  const resourceTypeOptions = useMemo(() => {
    return Object.values(ResourceTypeEnum).map((resourceType) => ({
      label: t(resourceType),
      value: resourceType
    }));
  }, [t]);
  const [resourceType, setResourceType] = useState(ResourceTypeEnum.LESSON);
  const [resourceName, setResourceName] = useState<string>("Resource " + index);

  useEffect(() => {
    const tempResourceName = watch(`chapters.${parentIndex}.resources.${index}.title`);
    if (tempResourceName && tempResourceName !== "") {
      setResourceName(tempResourceName);
    } else setResourceName("Resource " + index);
  }, [watch(`chapters.${parentIndex}.resources.${index}.title`)]);

  return (
    <>
      <Stack>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}>
          <IconButton
            variant='soft'
            sx={{
              marginLeft: "10px"
            }}
            color='danger'
            onClick={() => {
              removeResource();
            }}
          >
            <DeleteForeverRoundedIcon />
          </IconButton>
        </Box>
        <Grid container spacing={2}>
          {isEditting && (
            <>
              <Grid item xs={6}>
                <Controller
                  name={`chapters.${parentIndex}.resources.${index}.title`}
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <InputTextFieldColumn
                      error={Boolean(errors?.chapters?.[parentIndex]?.resources?.[index]?.title)}
                      errorMessage={
                        errors?.chapters?.[parentIndex]?.resources?.[index]?.title?.message
                      }
                      inputRef={ref}
                      useDefaultTitleStyle
                      title={`${t("chapter_resource_title")}`}
                      type='text'
                      placeholder={t("enter_chapter_resource_title")}
                      titleRequired={true}
                      translation-key={["chapter_resource_title", "enter_chapter_resource_title"]}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <TitleWithInfoTip
                  translation-key='resource_type_title'
                  title={`${t("resource_type_title")} `}
                  titleRequired
                  fontSize='12px'
                  color='var(--gray-60)'
                  gutterBottom
                  fontWeight='600'
                />
                <Controller
                  name={`chapters.${parentIndex}.resources.${index}.resourceType`}
                  control={control}
                  defaultValue={resourceTypeOptions[0].value}
                  render={({ field: { onChange, value } }) => (
                    <JoySelect
                      value={value}
                      onChange={(newValue: any) => {
                        onChange(newValue);
                        setResourceType(newValue);
                      }}
                      options={resourceTypeOptions}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                {resourceType === ResourceTypeEnum.LESSON && (
                  <Controller
                    name={`chapters.${parentIndex}.resources.${index}.lessonHtml`}
                    control={control}
                    render={({ field }) => (
                      <TextEditor
                        title={"Lesson"}
                        openDialog
                        roundedBorder={true}
                        error={false}
                        placeholder={"Enter Lesson"}
                        required
                        translation-key='enter_lesson'
                        maxLines={10}
                        {...field}
                      />
                    )}
                  />
                )}
                {resourceType === ResourceTypeEnum.VIDEO && <>VIDEO</>}
                {resourceType === ResourceTypeEnum.CODE && <>QUESTION</>}
              </Grid>
            </>
          )}
        </Grid>
        {!isEditting && (
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Box
              sx={{
                backgroundColor:
                  resourceType === ResourceTypeEnum.LESSON
                    ? "#E3F2FD"
                    : resourceType === ResourceTypeEnum.VIDEO
                      ? "#FFEBEE"
                      : "#E8F5E9",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "fit-content",
                padding: "10px"
              }}
            >
              {resourceType === ResourceTypeEnum.LESSON ? (
                <BookRoundedIcon
                  sx={{
                    color: "#1976D2"
                  }}
                />
              ) : resourceType === ResourceTypeEnum.VIDEO ? (
                <SmartDisplayRoundedIcon
                  sx={{
                    color: "#D32F2F"
                  }}
                />
              ) : (
                <CodeRoundedIcon
                  sx={{
                    color: "#388E3C"
                  }}
                />
              )}
            </Box>
            <ParagraphBody fontWeight={"600"} colorname='--eerie-black'>
              {resourceName}
            </ParagraphBody>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default CreateCertificateCourse;
