import Block from "@components/BaseComponent/Block";
import Button from "@components/FormComponent/Button";
import DatePicker from "@components/FormComponent/DatePicker";
import CustomDropdown from "@components/FormComponent/Dropdown";
import FormInput from "@components/FormComponent/Input";
import TimePicker from "@components/FormComponent/TimePicker";
import FontSize from "@constants/FontSize";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationTypes } from "@navigation/navigationTypes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  addStage,
  getStagesByUserId,
} from "fireStoreCollection/Feature/stageCollection";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Helper from "utils/helper";
import { RootState } from "utils/stateTypes";
import { reservationValidate } from "./validate";

export type RegisterStageFormParams = {
  customerEmail: string;
  date: string;
  start: string;
  end: string;
  price: number;
  note: string;
  title: string;
  status: "holding" | "available" | "reserved";
  color?: string;
};

const statusColors = {
  holding: "#FFF3D9",
  available: "#D0D0D0",
  default: "#D9FFD9",
};

const INITIAL_VALUES: Partial<RegisterStageFormParams> = {
  customerEmail: "",
  date: "",
  start: "",
  end: "",
  price: 0,
  note: "",
  status: "holding",
  title: "",
  color: "",
};

const RegisterStageForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { userData } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<NavigationTypes>>();

  const STAGE_STATUS = [
    {
      label: "Đang giữ chỗ",
      value: "holding",
    },
    {
      label: "Còn trống",
      value: "available",
    },
    {
      label: "Đã đặt",
      value: "reserved",
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegisterStageFormParams>({
    resolver: yupResolver(reservationValidate),
    mode: "onChange",
    defaultValues: INITIAL_VALUES,
  });

  const handleRegisterStage: SubmitHandler<RegisterStageFormParams> = async (
    values: RegisterStageFormParams
  ) => {
    setLoading(true); // Start loading
    let params = values;
    params.start = Helper.combineDateTimeToISO(values.date, values.start);
    params.end = Helper.combineDateTimeToISO(values.date, values.end);
    params.color = statusColors[values.status] || statusColors.default;

    const result = await addStage(userData.uid, params);
    if (result.success) {
      await getStagesByUserId(userData.uid);
      navigation.goBack();
    }
    setLoading(false); // Stop loading
  };
  return (
    <Block flex paddingHorizontal={16}>
      <FormInput
        leftIcon={{ name: "Profile", size: 18 }}
        type="input"
        placeholder="Tiêu đề"
        control={control}
        name="title"
      />
      <FormInput
        leftIcon={{ name: "Profile", size: 18 }}
        type="input"
        placeholder="Email khách hàng"
        control={control}
        name="customerEmail"
      />
      <FormInput
        leftIcon={{ name: "Profile", size: 18 }}
        type="input"
        placeholder="Tổng tiền"
        control={control}
        name="price"
      />
      <FormInput
        leftIcon={{ name: "Profile", size: 18 }}
        type="input"
        placeholder="Ghi chú"
        control={control}
        name="note"
      />
      <CustomDropdown
        label="Trạng thái sân"
        options={STAGE_STATUS}
        name="status"
        icon={{ name: "User2Light", size: 18 }}
        control={control}
      />
      <DatePicker control={control} name="date" />
      <TimePicker placeholder="Giờ bắt đầu" control={control} name="start" />
      <TimePicker control={control} placeholder="Giờ kết thúc" name="end" />

      <Button
        disabled={!isValid}
        isLoading={loading}
        onPress={handleSubmit(handleRegisterStage)}
        titleStyle={{ fontSize: FontSize.largeText }}
        shadow
        title="Đặt sân"
      />
    </Block>
  );
};

export default RegisterStageForm;
