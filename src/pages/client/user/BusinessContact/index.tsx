import classes from "./styles.module.scss";
import { Grid, TextareaAutosize, Tooltip } from "@mui/material";
import { Box } from "@mui/material";
import ParagraphBody from "components/text/ParagraphBody";
import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading1 from "components/text/Heading1";
import InputTextField from "components/common/inputs/InputTextField";
import { setErrorMess, setSuccessMess } from "reduxes/AppStatus";
import TextTitle from "components/text/TextTitle";
import ErrorMessage from "components/text/ErrorMessage";
import { CreateOrganizationRequest } from "models/authService/entity/organization";
import { OrganizationService } from "services/authService/OrganizationService";
import { InputPhone } from "components/common/inputs/InputPhone";
import useAuth from "hooks/useAuth";
import JoyButton from "@mui/joy/Button";

interface IFormData {
  businessEmail: string;
  businessDescription?: string;
  businessName: string;
  businessPhone: string;
  businessAddress: string;
}

export default function BusinessContact() {
  const { t } = useTranslation();
  const [isSubmitBusinessContact, setIsSubmitBusinessContact] = useState(false);
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const schema = useMemo(() => {
    return yup.object().shape({
      businessEmail: yup.string().required(t("business_email_required")).email(t("email_invalid")),
      businessDescription: yup.string(),
      businessName: yup.string().required(t("business_name_required")),
      businessPhone: yup.string().required(t("business_phone_required")),
      businessAddress: yup.string().required(t("business_address_required"))
    });
  }, [t]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });

  const handleSubmitContactUs = async (data: IFormData) => {
    const createOrganizationData: CreateOrganizationRequest = {
      email: data.businessEmail,
      phone: data.businessPhone,
      name: data.businessName,
      address: data.businessAddress,
      description: data.businessDescription
    };
    setIsSubmitBusinessContact(true);
    OrganizationService.createOrganizationByContactUs(createOrganizationData)
      .then(async (response) => {
        dispatch(
          setSuccessMess("Your request has been sent successfully. We will contact you soon!")
        );
      })
      .catch((error: any) => {
        dispatch(setErrorMess("Failed to send request. Please try again!"));
        console.error("Failed to contact us", {
          code: error.response?.code || 503,
          status: error.response?.status || "Service Unavailable",
          message: error.response?.message || error.message
        });
      })
      .finally(() => {
        setIsSubmitBusinessContact(false);
      });
  };

  return (
    <Box id={classes.contactUsRoot}>
      <Grid container className={classes.contactUsContainer}>
        <Grid item xs={12} md={12} id={classes.contactUsBodyWrapper}>
          <Box className={classes.form}>
            <Heading1 translation-key='business_create_organization'>
              {t("business_create_organization")}
            </Heading1>
            <ParagraphBody translation-key='business_create_organization_description'>
              {t("business_create_organization_description")}
            </ParagraphBody>
            <form className={classes.formControl} onSubmit={handleSubmit(handleSubmitContactUs)}>
              <Grid container columns={12} className={classes.inputItem}>
                <TextTitle translation-key='common_phone'>{t("common_phone")}</TextTitle>
                <Controller
                  control={control}
                  name='businessPhone'
                  render={({ field }) => {
                    return (
                      <InputPhone
                        errorMessage={errors?.businessPhone?.message}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    );
                  }}
                />
                {errors.businessPhone?.message && (
                  <ErrorMessage>{errors.businessPhone?.message}</ErrorMessage>
                )}
              </Grid>
              <Grid container columns={12} className={classes.inputItem}>
                <TextTitle translation-key='Email'>{t("business_email")}</TextTitle>
                <InputTextField
                  type='text'
                  inputRef={register("businessEmail")}
                  width='100%'
                  errorMessage={errors?.businessEmail?.message}
                />
              </Grid>
              <Grid container columns={12} className={classes.inputItem}>
                <TextTitle translation-key='Email'>{t("business_name")}</TextTitle>
                <InputTextField
                  type='text'
                  inputRef={register("businessName")}
                  width='100%'
                  errorMessage={errors?.businessName?.message}
                />
              </Grid>
              <Grid container columns={12} className={classes.inputItem}>
                <TextTitle translation-key='business_address'>{t("business_address")}</TextTitle>
                <InputTextField
                  type='text'
                  inputRef={register("businessAddress")}
                  width='100%'
                  errorMessage={errors?.businessName?.message}
                />
              </Grid>
              <Grid container columns={12} className={classes.inputItem}>
                <TextTitle translation-key='common_description'>
                  {t("common_description")}
                </TextTitle>
                <TextareaAutosize
                  aria-label='empty textarea'
                  translation-key='common_description'
                  className={classes.textArea}
                  minRows={5}
                  {...register("businessDescription")}
                  aria-invalid={errors.businessDescription ? true : false}
                />
              </Grid>
              <Tooltip
                title={isLoggedIn === false ? t("business_contact_submit_register_tooltip") : ""}
                placement='top'
                arrow
              >
                <span>
                  <JoyButton
                    loading={isSubmitBusinessContact}
                    color='primary'
                    type='submit'
                    translation-key='business_create_organization'
                    fullWidth
                    disabled={isLoggedIn === false}
                  >
                    {t("business_create_organization")}
                  </JoyButton>
                </span>
              </Tooltip>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
