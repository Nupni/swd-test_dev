import { Select } from 'antd';
import React, { FC, Dispatch, SetStateAction } from 'react';

type optionProps = {
  lang?: string;
  value?: string;
};

type SelectProps = {
  lists?: optionProps[];
  defaultValue?: string;
  setLang: (data: string) => void;
};

const SelectButton: FC<SelectProps> = ({ lists, defaultValue, setLang }) => {
  const { Option } = Select;

  const handleChange = (value: string) => {
    setLang(value);
  };

  return (
    <>
      <Select
        className="uppercase"
        style={{ width: 'auto' }}
        defaultValue={defaultValue}
        value={defaultValue}
        onChange={handleChange}
      >
        {lists!.map((list, index) => (
          <Option className="uppercase" key={index} value={list.lang}>
            {list.value}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default SelectButton;
