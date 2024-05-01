interface Option {
  label: string;
  value: string | number;
}

interface CustomDropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
}
