import React, { useState } from "react";
import _ from "lodash";
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { useTheme } from 'react-native-paper';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Text, Image, Platform, TouchableOpacity, ActivityIndicator } from "react-native";

import { EMAIL_REGEX, ROUTES, SIGNUP_API, setAuthData } from "../../utils/constant";
import CustomButton from "../../components/CustomButton";
import LanguagePicker from "../../components/LanguagePicker";
import PushNotification from "../../components/PushNotification";

const initialValue = {
  email: "",
  password: "",
  firstname: "",
  lastname: ""
}

const SignupScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const theme = useTheme();

  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState(_.cloneDeep(initialValue));
  const [errors, setErrors] = useState<any>(_.cloneDeep(initialValue));
  const [apiError, setApiError] = useState<string>("");

  const validateForm = () => {
    let errors: any = {};

    if (!form?.email) errors.email = t("email_is_required");
    if (!form?.password) errors.password = t("password_is_required");
    if (!form?.firstname) errors.firstname = t("firstname_is_required");
    if (!form?.lastname) errors.lastname = t("lastname_is_required");

    const lang = i18n.language;
    const regex = EMAIL_REGEX[lang]
    if (form?.email && regex.test(form?.email) === false) {
      errors.email = `${t("enter_valid_email")} .${lang}`;
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSignup = () => {
    setApiError("");

    if (validateForm()) {
      setLoading(true);
      axios
        .post(
          SIGNUP_API,
          {
            email: form?.email,
            password: form?.password,
            firstname: form?.firstname,
            lastname: form?.lastname
          }
        )
        .then(async (res: any) => {
          await setAuthData(res?.data);
          setLoading(false);
          handleResetForm();
          navigation.navigate(
            ROUTES.USER_ROUTE,
            { auth: res?.data }
          );
        })
        .catch((error: any) => {
          console.log(error);
          setApiError(error?.message);
          setLoading(false);
        });
    }
  };

  const handleResetForm = () => {
    setForm(_.cloneDeep(initialValue));
    setErrors(_.cloneDeep(initialValue));
  }

  const handleChangeText = (value: any) => {
    setForm((prev) => ({
      ...prev,
      ...value
    }));
  }

  return (
    <>
      {loading ? <View style={styles.loading}><ActivityIndicator style={styles.indicator} color={"#0095fb"} size="large" /></View> : null}
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.container}
      >
        <View style={styles.actions}>
          <PushNotification />
          <LanguagePicker />
        </View>

        <View>
          <View style={styles.form}>
            <Image
              source={{ uri: "https://source.unsplash.com/random?wallpapers" }}
              style={{
                width: "100%",
                height: 200,
                alignSelf: "center",
                marginBottom: 20,
              }}
            />

            <View>
              <Text style={styles.label}>{t("email")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("enter_your_email")}
                autoCapitalize="none"
                value={form?.email}
                onChangeText={(val) => handleChangeText({ email: val })}
              />
              {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
            </View>

            <View>
              <Text style={styles.label}>{t("password")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("enter_your_password")}
                autoCapitalize="none"
                value={form?.password}
                onChangeText={(val) => handleChangeText({ password: val })}
                secureTextEntry
              />
              {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
            </View>

            <View>
              <Text style={styles.label}>{t("firstname")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("enter_your_firstname")}
                autoCapitalize="none"
                value={form?.firstname}
                onChangeText={(val) => handleChangeText({ firstname: val })}
              />
              {errors.firstname ? <Text style={styles.errorText}>{errors.firstname}</Text> : null}
            </View>

            <View>
              <Text style={styles.label}>{t("lastname")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("enter_your_lastname")}
                autoCapitalize="none"
                value={form?.lastname}
                onChangeText={(val) => handleChangeText({ lastname: val })}
              />
              {errors.lastname ? <Text style={styles.errorText}>{errors.lastname}</Text> : null}
            </View>

            {apiError ? <Text style={styles.errorText}>{apiError}</Text> : null}

            <CustomButton title={t("sign_up")} onPress={handleSignup} />

            <View>
              <TouchableOpacity onPress={() => { navigation.navigate(ROUTES.LOGIN_ROUTE) }}>
                <Text style={[styles.login, { color: theme?.colors?.primary }]}>{t("already_ac_login")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 15,
  },
  login: {
    justifyContent: "center",
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 14
  },
  loading: {
    position: "absolute",
    zIndex: 99,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default SignupScreen;
