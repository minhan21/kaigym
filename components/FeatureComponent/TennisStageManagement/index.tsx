import moment from "moment";
import Block from "@components/BaseComponent/Block";
import Typography from "@components/BaseComponent/Text";
import CalendarKit, {
  CalendarKitHandle,
  EventItem,
  LocaleConfigs,
} from "@howljs/calendar-kit";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Fonts from "@constants/Fonts";
import FontSize from "@constants/FontSize";
import CustomModal from "@components/BaseComponent/CustomModal";
import Button from "@components/FormComponent/Button";

interface Props {
  data: EventItem[];
}

const MIN_DATE = new Date(
  new Date().getFullYear() - 2,
  new Date().getMonth(),
  new Date().getDate()
).toISOString();

const MAX_DATE = new Date(
  new Date().getFullYear() + 2,
  new Date().getMonth(),
  new Date().getDate()
).toISOString();

const INITIAL_DATE = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
).toISOString();

const TennisStageManagement = (props: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [dataModal, setdataModal] = useState<any>({});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const calendarRef = useRef<CalendarKitHandle>(null);
  const unavailableHours = useMemo(
    () => [
      { start: 0, end: 6 * 60, enableBackgroundInteraction: true },
      { start: 20 * 60, end: 24 * 60, enableBackgroundInteraction: true },
    ],
    []
  );
  useEffect(() => {
    setEvents(props.data);
    return () => {};
  }, []);
  const initialLocales: Record<string, LocaleConfigs> = {
    vi: {
      weekDayShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
      meridiem: { ante: "sa", post: "ch" },
    },
  };
  const _onPressDayNumber = (date: string) => {
    calendarRef.current?.setVisibleDate(date);
  };
  const _onPressBackground = (date: string) => {
    console.log(date);
  };
  const highlightDates = useMemo(
    () => ({
      "6": { dayNumber: { color: "blue" }, dayName: { color: "blue" } },
      "7": { dayNumber: { color: "red" }, dayName: { color: "red" } },
    }),
    []
  );

  const _onPressEventItem = (data) => {
    console.log(data);
    setModalVisible(!isModalVisible);
    setdataModal(data);
  };
  const _renderEvent = useCallback((data) => {
    return (
      <Block>
        <Typography style={styles.eventTitle}>{data.title}</Typography>
        <Typography style={styles.eventTime}>
          {moment(data.start).format("HH:mm")} :
          {moment(data.end).format("HH:mm")}{" "}
        </Typography>
        <Typography style={styles.eventTime}>{data.status}</Typography>
        <Typography style={styles.eventTime}>
          ${data.price.toLocaleString()}
        </Typography>
      </Block>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CustomModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        title={dataModal.title}
        animationIn="zoomIn"
        animationOut="zoomOut"
        backdropColor="grey"
        backdropOpacity={0.8}
        backgroundColor={dataModal.color}
      >
        <Typography>Email khách:{dataModal.customerEmail}</Typography>
        <Typography>
          Thời gian: {moment(dataModal.start).format("HH:mm")} -
          {moment(dataModal.end).format("HH:mm")}
        </Typography>
        <Typography>Trạng thái: {dataModal.status}</Typography>
        <Typography>Tổng tiền: ${dataModal.price.toLocaleString()}</Typography>
        <Typography>Ghi chú: {dataModal.note}</Typography>
      </CustomModal>
      <CalendarKit
        ref={calendarRef}
        viewMode={"week"}
        scrollByDay={true}
        initialLocales={initialLocales}
        themeMode="light"
        showWeekNumber
        locale="vi"
        allowPinchToZoom
        onDateChanged={console.log}
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
        initialDate={INITIAL_DATE}
        onPressDayNumber={_onPressDayNumber}
        onPressBackground={_onPressBackground}
        // unavailableHours={unavailableHours}r
        highlightDates={highlightDates}
        events={events}
        onPressEvent={_onPressEventItem}
        renderEvent={_renderEvent}
        scrollToNow
        rightEdgeSpacing={1}
        overlapEventsSpacing={1}
      />
    </SafeAreaView>
  );
};

export default TennisStageManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  eventTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.caption,
  },
  eventTime: {
    fontFamily: Fonts.italic,
    fontSize: FontSize.too_caption,
  },
  customModalStyle: {
    alignItems: "center",
  },
});
