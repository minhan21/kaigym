import Block from "@components/BaseComponent/Block";
import RegisterStageForm from "@components/FeatureComponent/RegisterStageForm";
import Colors from "@constants/Colors";

const RegisterStage = () => {
  return (
    <Block radius={0} backgroundColor={Colors.light.white} flex>
      <RegisterStageForm />
    </Block>
  );
};

export default RegisterStage;
