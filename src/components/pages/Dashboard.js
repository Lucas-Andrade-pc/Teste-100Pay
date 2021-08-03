import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Sidebar from "../Sidebar";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Ionicons } from "@expo/vector-icons";
import NewTask from "./NewTask";

import {
  Roboto_400Regular,
  Roboto_300Light,
  Roboto_700Bold,
  Roboto_100Thin,
  useFonts,
} from "@expo-google-fonts/roboto";

import { AppLoading } from "expo";
import { transform } from "lodash";

const Main = ({ navigation }) => {
  function Tarefa() {
    return <NewTask />;
  }
  const fonts = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Roboto_700Bold,
    Roboto_100Thin,
  });
  if (!fonts) {
    return <AppLoading />;
  }
  function Right() {
    return (
      <View style={styles.actionView}>
        <TouchableOpacity>
          <View style={styles.rightActionConcluir}>
            <Ionicons name="checkbox" size={32} style={{ color: "#fff" }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rightActionExcluir}>
            <Ionicons name="trash" size={30} style={{ color: "#fff" }} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function Left() {
    return (
      <View style={styles.actionLeftView}>
        <TouchableOpacity>
          <View style={styles.leftAction}>
            <Ionicons
              name="file-tray-full"
              size={32}
              style={{ color: "#fff" }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.container}>
          <Text style={styles.listaTarefas}>Lista de tarefas </Text>
          <Text style={styles.Work}>Work </Text>
        </View>

        <Swipeable renderLeftActions={Left} renderRightActions={Right}>
          <View style={styles.content}>
            <Text style={styles.tarefas}>
              Faça as alterações para o novo design
            </Text>
            <View style={styles.dataHoras}>
              <Text style={styles.data}>18 nov 2021</Text>
              <Text style={styles.horas}>11:00 - 13:00</Text>
            </View>
          </View>
        </Swipeable>

        <Swipeable renderRightActions={Right}>
          <View style={styles.content}>
            <Text style={styles.tarefas}>
              Faça as alterações para o novo design
            </Text>
            <View style={styles.dataHoras}>
              <Text style={styles.data}>18 nov 2021</Text>
              <Text style={styles.horas}>11:00 - 13:00</Text>
            </View>
          </View>
        </Swipeable>
        
        <Swipeable renderRightActions={Right}>
          <View style={styles.content}>
            <Text style={styles.tarefas}>
              Faça as alterações para o novo design
            </Text>
            <View style={styles.dataHoras}>
              <Text style={styles.data}>18 nov 2021</Text>
              <Text style={styles.horas}>11:00 - 13:00</Text>
            </View>
          </View>
        </Swipeable>
        
        <Swipeable renderRightActions={Right}>
          <View style={styles.content}>
            <Text style={styles.tarefas}>
              Faça as alterações para o novo design
            </Text>
            <View style={styles.dataHoras}>
              <Text style={styles.data}>18 nov 2021</Text>
              <Text style={styles.horas}>11:00 - 13:00</Text>
            </View>
          </View>
        </Swipeable>

        <View style={styles.contentButton}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>+ NEW TASK</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*<Sidebar />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 15,
    justifyContent: "center",
  },
  content: {
    height: 90,
    width: "100%",
    marginLeft: 20,
    marginTop: 50,
    elevation: 2,
    borderRadius: 10,
  },
  listaTarefas: {
    fontFamily: "Roboto_300Light",
    color: "#d5d1d1",
    fontSize: 30,
  },
  Work: {
    fontFamily: "Roboto_700Bold",
    fontSize: 40,
  },
  tarefas: {
    paddingLeft: 10,

    marginTop: 10,
    fontSize: 20,
    fontFamily: "Roboto_300Light",
    alignItems: "center",
    justifyContent: "center",
  },
  dataHoras: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    padding: 10,
  },
  data: {
    fontFamily: "Roboto_300Light",
  },
  horas: {
    fontFamily: "Roboto_300Light",
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    height: 100,
  },
  contentButton: {
    //position: 'absolute',
    marginTop: 80,
    bottom: 20,
    // left: 0,
    // right: 0,
    marginLeft: 20,
    // height: 80,
    paddingLeft: 40,
    paddingRight: 40,
    width: "100%",

    fontFamily: "Roboto_400Regular",
  },
  button: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8e0bc4",
    borderRadius: 10,
  },
  buttonText: {
    //height: 35,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    justifyContent: "center",
    fontFamily: "Roboto_400Regular",
    elevation: 5,
    fontSize: 20,
  },
  rightActionConcluir: {
    flex: 1,
    backgroundColor: "#388e3c",
    justifyContent: "center",
    alignItems: "center",
  },
  actionTextConcluir: {},
  rightActionExcluir: {
    flex: 1,
    backgroundColor: "#ff0000",
    justifyContent: "center",
    alignItems: "center",
  },
  actionTextExcluir: {},
  actionView: {
    flexDirection: "row",

    height: 85,
    marginTop: 53,
    marginLeft: 60,
  },
  actionLeftView: {
    marginTop: 53,

    height: 85,
    backgroundColor: "#000000",
    justifyContent: "center",
  },
  leftAction: {},
});
export default Main;
