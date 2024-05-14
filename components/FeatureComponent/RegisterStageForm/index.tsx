import Block from "@components/BaseComponent/Block";
import DatePicker from "@components/FormComponent/DatePicker";
import CustomDropdown from "@components/FormComponent/Dropdown";
import FormInput from "@components/FormComponent/Input";
import TimePicker from "@components/FormComponent/TimePicker";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { reservationValidate } from "./validate";

const RegisterStageForm = () => {
  const INITIAL_VALUES = {
    customerEmail: "example@example.com", // Một địa chỉ email hợp lệ
    date: "2024-05-15", // Một ngày hợp lệ
    time: "14:30", // Một thời gian hợp lệ theo định dạng HH:MM (24 giờ)
    price: "100", // Một số dương hợp lệ
    note: "Ghi chú ví dụ", // Ghi chú tùy chọn, có thể để trống
    status: "holding", // Một trạng thái hợp lệ, có thể là "holding", "confirmed" hoặc "cancelled"
  };
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
  } = useForm({
    resolver: yupResolver(reservationValidate),
    mode: "onChange",
    defaultValues: INITIAL_VALUES,
  });
  return (
    <Block paddingHorizontal={16} flex>
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
        containerStyles={{ marginTop: 15 }}
        label="Trạng thái sân"
        options={STAGE_STATUS}
        name="status"
        icon={{ name: "User2Light", size: 18 }}
        control={control}
      />
      <DatePicker control={control} name="date" />
      <TimePicker control={control} name="time" />
    </Block>
  );
};

export default RegisterStageForm;
