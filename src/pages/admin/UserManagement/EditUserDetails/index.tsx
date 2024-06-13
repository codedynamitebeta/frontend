import { yupResolver } from "@hookform/resolvers/yup";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Avatar, Box, Card, Divider, Grid } from "@mui/material";
import InputTextField from "components/common/inputs/InputTextField";
import Heading1 from "components/text/Heading1";
import ParagraphSmall from "components/text/ParagraphSmall";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { routes } from "routes/routes";
import * as yup from "yup";
import classes from "./styles.module.scss";
import JoyButton from "@mui/joy/Button";
import { AppDispatch } from "store";
import { useDispatch } from "react-redux";
import { setErrorMess, setSuccessMess } from "reduxes/AppStatus";
import BasicSelect, { ItemProps } from "components/common/select/BasicSelect";
import { ERoleName } from "models/authService/entity/role";
import TextTitle from "components/text/TextTitle";
import {
  CreatedUserByAdminRequest,
  UpdateUserByAdminRequest,
  User
} from "models/authService/entity/user";
import { UserService } from "services/authService/UserService";
import { clearUsers } from "reduxes/authService/user";
import { format, parse } from "date-fns";
import ErrorMessage from "components/text/ErrorMessage";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ParagraphBody from "components/text/ParagraphBody";
import { standardlizeUTCStringToLocaleString } from "utils/moment";
import i18next from "i18next";
import { IOptionItem } from "models/general";
import InputSelect from "components/common/inputs/InputSelect";
import images from "config/images";

interface IFormDataType {
  firstName: string;
  lastName: string;
  roleName: IOptionItem;
  dob?: string;
  phone: string;
}

const EditUserDetails = () => {
  const breadcumpRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [submitLoading, setSubmitLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const schema = useMemo(() => {
    return yup.object().shape({
      firstName: yup.string().required(t("first_name_required")),
      lastName: yup.string().required(t("last_name_required")),
      dob: yup.string(),
      phone: yup
        .string()
        .matches(/^\+?[1-9][0-9]{7,14}$/, t("phone_number_invalid"))
        .required(t("phone_required")),
      roleName: yup
        .object()
        .shape({
          id: yup.string().required(),
          name: yup.string().required()
        })
        .required(t("role_required"))
    });
  }, [t]);
  const { userId } = useParams<{ userId: string }>();
  const [currentLang, setCurrentLang] = useState(() => {
    return i18next.language;
  });
  const [user, setUser] = useState<User>();
  const roleNameList: IOptionItem[] = useMemo(
    () => [
      { id: ERoleName.ADMIN, name: t("role_system_admin") },
      { id: ERoleName.USER, name: t("role_user") },
      { id: ERoleName.LECTURER_MOODLE, name: t("role_lecturer") },
      { id: ERoleName.STUDENT_MOODLE, name: t("role_student") },
      { id: ERoleName.ADMIN_MOODLE, name: t("role_org_admin") }
    ],
    [t]
  );

  const mappingUserRole = useCallback(
    (user: User) => {
      const matchedRole = roleNameList.find((role) =>
        user?.roles.some(
          (userRole) => userRole?.name === role.id && userRole?.name !== ERoleName.USER
        )
      );

      return matchedRole ? matchedRole : roleNameList.find((role) => role.id === ERoleName.USER);
    },
    [roleNameList]
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    register
  } = useForm<IFormDataType>({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    setCurrentLang(i18next.language);
  }, [i18next.language]);

  const handleGetUserById = useCallback(
    async (id: string) => {
      try {
        const userResponse = await UserService.getUserById(id);
        const roleName = mappingUserRole(userResponse);
        if (userResponse) {
          reset({
            firstName: userResponse.firstName,
            lastName: userResponse.lastName,
            dob: format(userResponse.dob, "dd-MM-yyyy"),
            phone: userResponse.phone,
            roleName: roleName
          });
          setUser(userResponse);
        }
      } catch (error: any) {
        console.error("error", error);
      }
    },
    [reset, mappingUserRole]
  );

  useEffect(() => {
    if (!user && userId) {
      handleGetUserById(userId);
    }
  }, [user, handleGetUserById, userId]);

  const submitHandler = async (data: any) => {
    const formSubmittedData: IFormDataType = { ...data };
    const updateUserByAdminData: UpdateUserByAdminRequest = {
      firstName: formSubmittedData.firstName,
      lastName: formSubmittedData.lastName,
      dob: formSubmittedData.dob
        ? parse(formSubmittedData.dob, "dd-MM-yyyy", new Date())
        : undefined,
      roleName: formSubmittedData.roleName.id,
      phone: formSubmittedData.phone
    };
    await handleUpdateUser(updateUserByAdminData);
  };

  const handleUpdateUser = useCallback(
    async (updateUserByAdminRequest: UpdateUserByAdminRequest) => {
      setSubmitLoading(true);
      try {
        if (!userId) {
          return;
        }
        await UserService.updateUserByAdmin(userId, updateUserByAdminRequest);
        setSubmitLoading(false);
        dispatch(setSuccessMess("Updated user successfully"));
        dispatch(clearUsers());
      } catch (error: any) {
        console.error("error", error);
        dispatch(setErrorMess("User is updated failed!!! please check your input information"));
        if (error.code === 401 || error.code === 403) {
          dispatch(setErrorMess("Please sign in to continue"));
        }
        setSubmitLoading(false);
      }
    },
    [t]
  );

  return (
    <>
      <Card
        sx={{
          margin: "20px",
          // padding: "20px",
          "& .MuiDataGrid-root": {
            border: "1px solid #e0e0e0",
            borderRadius: "4px"
          },
          gap: "20px"
        }}
      >
        <Box className={classes.breadcump} ref={breadcumpRef}>
          <Box id={classes.breadcumpWrapper}>
            <ParagraphSmall
              colorname='--blue-500'
              className={classes.cursorPointer}
              onClick={() => navigate(routes.admin.users.root)}
              translation-key='user_management'
            >
              {t("user_management")}
            </ParagraphSmall>
            <KeyboardDoubleArrowRightIcon id={classes.icArrow} />
            <ParagraphSmall colorname='--blue-500' translate-key='common_account_info'>
              {t("common_account_info")}
            </ParagraphSmall>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            padding: "20px"
          }}
        >
          <Heading1 translate-key='common_account_info'>{t("common_account_info")}</Heading1>
          <Box component='form' className={classes.formBody} onSubmit={handleSubmit(submitHandler)}>
            <Grid container columns={12} justifyContent={"center"}>
              <Avatar
                sx={{ bgcolor: "var(--green-500)", width: 150, height: 150, fontSize: "60px" }}
                alt={user?.email}
                src={user?.avatarUrl}
              >
                {user?.firstName.charAt(0)}
              </Avatar>
            </Grid>
            <InputSelect
              fullWidth
              title={t("common_role")}
              name='roleName'
              control={control}
              selectProps={{
                options: roleNameList,
                placeholder: "Select role name"
              }}
              errorMessage={(errors.roleName as any)?.id?.message}
            />
            <Grid container spacing={1} columns={12}>
              <Grid item xs={4}>
                <TextTitle translation-key='common_phone'>{t("common_phone")}</TextTitle>
              </Grid>
              <Grid item xs={7} display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Controller
                  control={control}
                  name='phone'
                  render={({ field }) => {
                    return (
                      <PhoneInput
                        placeholder='Enter phone number'
                        value={field.value}
                        onChange={field.onChange}
                        className={classes.phoneInput}
                      />
                    );
                  }}
                />
                {errors.phone?.message && <ErrorMessage>{errors.phone?.message}</ErrorMessage>}
              </Grid>
            </Grid>
            <InputTextField
              title={t("common_last_login")}
              type='text'
              disabled
              value={standardlizeUTCStringToLocaleString(user?.lastLogin as string, currentLang)}
              width='100%'
            />
            <InputTextField
              title={t("Email")}
              type='text'
              disabled
              value={user?.email}
              width='100%'
            />
            <InputTextField
              title={t("first_name")}
              type='text'
              inputRef={register("firstName")}
              errorMessage={errors?.firstName?.message}
              width='100%'
            />
            <InputTextField
              title={t("last_name")}
              type='text'
              inputRef={register("lastName")}
              errorMessage={errors?.lastName?.message}
              width='100%'
            />
            <Grid container spacing={1} columns={12}>
              <Grid item xs={4}>
                <TextTitle translation-key='common_DOB'>{t("common_DOB")}</TextTitle>
              </Grid>
              <Grid item xs={7}>
                <Controller
                  control={control}
                  name='dob'
                  render={({ field }) => {
                    return (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label={"Date"}
                          value={dayjs(field.value, "DD/MM/YYYY")}
                          inputRef={field.ref}
                          onChange={(date) => {
                            if (date?.isValid()) {
                              field.onChange(format(date?.toDate(), "dd-MM-yyyy"));
                            }
                          }}
                        />
                      </LocalizationProvider>
                    );
                  }}
                />
                {errors.dob?.message && <ErrorMessage>{errors.dob?.message}</ErrorMessage>}
              </Grid>
            </Grid>
            {user && (
              <>
                <Grid container spacing={1} columns={12}>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    {images.logo.moodleLogo && (
                      <Avatar
                        alt='Google'
                        src={images.logo.googleLogo}
                        sx={{
                          width: "40px",
                          height: "40px"
                        }}
                      />
                    )}
                    <ParagraphBody
                      sx={{
                        marginLeft: "5px"
                      }}
                    >
                      Google
                    </ParagraphBody>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    {user?.isLinkedWithGoogle ? (
                      <ParagraphBody translation-key='user_detail_dialog_linked'>
                        {t("user_detail_dialog_linked")}
                      </ParagraphBody>
                    ) : (
                      <ParagraphBody translation-key='user_detail_dialog_not_linked'>
                        {t("user_detail_dialog_not_linked")}
                      </ParagraphBody>
                    )}
                  </Grid>
                </Grid>
                <Divider />

                <Grid container spacing={1} columns={12}>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    {images.logo.moodleLogo && (
                      <Avatar
                        alt='Microsoft'
                        src={images.logo.microsoftLogo}
                        sx={{
                          width: "40px",
                          height: "40px"
                        }}
                      />
                    )}
                    <ParagraphBody
                      sx={{
                        marginLeft: "5px"
                      }}
                    >
                      Microsoft
                    </ParagraphBody>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    sx={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    {user?.isLinkedWithMicrosoft ? (
                      <ParagraphBody translation-key='user_detail_dialog_linked'>
                        {t("user_detail_dialog_linked")}
                      </ParagraphBody>
                    ) : (
                      <ParagraphBody translation-key='user_detail_dialog_not_linked'>
                        {t("user_detail_dialog_not_linked")}
                      </ParagraphBody>
                    )}
                  </Grid>
                </Grid>
                <Divider />
              </>
            )}
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <JoyButton
                loading={submitLoading}
                variant='solid'
                type='submit'
                translation-key='user_update'
              >
                {t("user_update")}
              </JoyButton>
            </Grid>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default EditUserDetails;
