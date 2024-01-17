
import React from "react";
import { View, StyleSheet, Text, Image, SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";

import { ROUTES, setAuthData } from "../../utils/constant";
import CustomButton from "../../components/CustomButton";

const UserScreen = ({ route, navigation }: any) => {
  const { t } = useTranslation();
  const auth = route?.params?.auth || "";

  const handleLogout = async () => {
    await setAuthData(null);
    navigation.navigate(ROUTES.SIGNUP_ROUTE);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Image
          source={{ uri: "https://source.unsplash.com/random?wallpapers" }}
          style={{
            width: "100%",
            height: 250,
            alignSelf: "center",
            marginBottom: 15,
          }}
        />

        <View>
          <View style={styles.row}>
            <Text style={styles.head}>{t("name")}</Text>
            <Text style={styles.label}>{`${auth?.firstname || ""} ${auth?.lastname || ""}`}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.head}>{t("email")}</Text>
            <Text style={styles.label}>{auth?.email || ""}</Text>
          </View>
        </View>

        <View style={styles.button}>
          <CustomButton title={t("logout")} onPress={handleLogout} />
        </View>
      </View>
    </SafeAreaView>
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
  row: {
    justifyContent: "space-between",
    marginBottom: 10
  },
  head: {
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
  },
  button: {
    marginTop: 15
  },
});

export default UserScreen;
