import { StyleSheet, TouchableOpacity } from "react-native";
import Block from "@components/BaseComponent/Block";
import Colors from "@constants/Colors";
import Icon from "@components/Icon";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationTypes } from "@navigation/navigationTypes";
import React, { useState } from "react";
import LoadingScreen from "@components/BaseComponent/Loading";
import TennisStageManagement from "@components/FeatureComponent/TennisStageManagement";
import { getStagesByUserId } from "fireStoreCollection/Feature/stageCollection";
import { useSelector } from "react-redux";
import { RootState } from "utils/stateTypes";

const OwnerHomeScreen = () => {
  const { userData } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<NavigationTypes>>();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useFocusEffect(
    React.useCallback(() => {
      const fetchRecords = async () => {
        setLoading(true); // Ensure loading is set to true when fetching starts
        const response = await getStagesByUserId(userData.uid);
        if (response.success) {
          setRecords(response.records);
        } else {
          setError(response.error);
        }
        setLoading(false); // Set loading to false when fetching is done
      };

      fetchRecords();

      return () => {
        // Cleanup function if necessary
      };
    }, [])
  );

  const navigationToRegisterStage = () => {
    navigation.navigate("RegisterStage");
  };
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Block radius={0} flex backgroundColor={Colors.light.white}>
      <TouchableOpacity
        onPress={navigationToRegisterStage}
        style={styles.floatBtn}
      >
        <Icon icon="Plus" size={24} />
      </TouchableOpacity>

      <TennisStageManagement data={records.length > 0 ? records : []} />
    </Block>
  );
};

export default OwnerHomeScreen;
const styles = StyleSheet.create({
  floatBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 90,
    borderWidth: 1,
    padding: 8,
    borderColor: Colors.light.gray1,
    zIndex: 999,
  },
});
