import Block from "@components/BaseComponent/Block";
import Typography from "@components/BaseComponent/Text";
import Colors from "@constants/Colors";
import { Calendar } from "react-native-calendars";

const PlayerHomeScreen = () => {
  return (
    <Block backgroundColor={Colors.light.white}>
      <Calendar
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        markedDates={{
          "2024-05-16": { selected: true, marked: true, selectedColor: "blue" },
          "2024-05-17": { marked: true },
          "2024-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
        }}
      />
    </Block>
  );
};

export default PlayerHomeScreen;
