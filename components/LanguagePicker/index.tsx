import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { PreferencesContext } from './PreferencesContext';
import {
  Switch,
  useTheme,
  DefaultTheme,
  MD2LightTheme,
  MD2DarkTheme,
  MD3LightTheme,
  MD3DarkTheme,
} from 'react-native-paper';

const languages = [
  { name: "en", label: "USA" },
  { name: "ae", label: "عربي" },
  { name: "de", label: "Deutsch" },
  { name: "fr", label: "Français" }
];

const LightThemes: any = {
  "en": {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: '#7b5e97',
      secondary: '#665a6f',
      tertiary: '#805158',
    },
  },
  "ae": {
    ...MD2LightTheme,
    dark: false,
    colors: {
      ...MD2LightTheme.colors,
      primary: '#8f809b',
      secondary: '#665a6f',
      tertiary: '#805158',
    },
  },
  "de": {
    ...MD3LightTheme,
    dark: false,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#525da3',
      secondary: '#665a6f',
      tertiary: '#805158',
    },
  },
  "fr": {
    ...MD2LightTheme,
    dark: false,
    colors: {
      ...MD2LightTheme.colors,
      primary: '#ca6767',
      secondary: '#665a6f',
      tertiary: '#805158',
    }
  }
}

const DarkThemes: any = {
  "en": {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: '#663399',
      secondary: '#665a6f',
      tertiary: '#805158',
    }
  },
  "ae": {
    ...MD2DarkTheme,
    dark: true,
    colors: {
      ...MD2DarkTheme.colors,
      primary: '#665a6f',
      secondary: '#665a6f',
      tertiary: '#805158',
    }
  },
  "de": {
    ...MD3DarkTheme,
    dark: true,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#303f9f',
      secondary: '#665a6f',
      tertiary: '#805158',
    }
  },
  "fr": {
    ...MD2DarkTheme,
    dark: true,
    colors: {
      ...MD2DarkTheme.colors,
      primary: '#d32f2f',
      secondary: '#665a6f',
      tertiary: '#805158',
    }
  }
}

const LanguagePicker = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();

  const { changeTheme, isThemeDark } = useContext(PreferencesContext);
  const [modalVisible, setModalVisible] = useState(false);

  const LanguageItem = ({ name, label }: { name: string; label: string }) => (
    <Pressable
      onPress={() => {
        changeTheme(isThemeDark ? DarkThemes[name] : LightThemes[name]);
        i18n.changeLanguage(name);
        setModalVisible(!modalVisible);
      }}
    >
      <Text style={styles.textItem}>{label}</Text>
    </Pressable>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={[styles.modalView, { backgroundColor: theme?.colors?.primary }]}
          >
            {languages.map((lang) => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>
        </View>
      </Modal>

      <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Pressable
          style={[styles.buttonOpen, { backgroundColor: theme?.colors?.primary }]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>{languages?.find((l: any) => l?.name === i18n?.language)?.label}</Text>
        </Pressable>
        <Switch
          color={theme?.colors?.primary}
          value={isThemeDark}
          onValueChange={() => changeTheme(isThemeDark ? LightThemes[i18n.language] : DarkThemes[i18n.language])}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    borderRadius: 5,
    paddingHorizontal: 50,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textItem: {
    margin: 5,
    padding: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#ffffff",
  },
  buttonOpen: {
    width: "auto",
    height: 45,
    margin: 10,
    padding: 10,
    elevation: 2,
    borderRadius: 4
  },
  textStyle: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
  },
});

export default LanguagePicker;