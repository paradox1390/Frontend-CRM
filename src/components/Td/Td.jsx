import { useState } from "react";
import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { changeOrderData } from "@/store/slice/ordersSlice";

export const Td = ({ col, type, data }) => {
  const initialValue = () => {
    if (col === "products") {
      return data[col].join("\n");
    }
    return data[col];
  };

  const dispatch = useDispatch();
  const idOrder = data.id;
  const [value, setValue] = useState(initialValue());

  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(
      changeOrderData({ idOrder, nameField: col, data: e.target.value }),
    );
  };

  const onBlur = (e) => {
    setValue(e.target.innerText);
    dispatch(
      changeOrderData({ idOrder, nameField: col, data: e.target.innerText }),
    );
  };

  return (
    <>
      {(type === "string" || type === "number" || type === "product") && (
        <td className="font-medium text-sm first:rounded-l-md last:rounded-r-md">
          <span
            suppressContentEditableWarning={true}
            contentEditable={true}
            className="block p-1"
            onBlur={onBlur}
          >
            {value}
          </span>
        </td>
      )}
      {type === "phone" && (
        <td
          className="font-medium text-sm first:rounded-l-md last:rounded-r-md"
          onBlur={() => {
            dispatch(changeOrderData({ idOrder, nameField: col, data: value }));
          }}
        >
          <IMaskInput
            mask="+{38} ({\0}00) 000-00-00"
            unmask={true}
            lazy={false}
            value={value}
            placeholderChar="_"
            className="px-2 py-3 w-40"
            onAccept={(value) => {
              setValue(value);
            }}
          />
        </td>
      )}
      {type === "link" && (
        <td className="font-medium text-sm first:rounded-l-md last:rounded-r-md">
          <Link to="/app/orders" relative="path" className="p-2">
            {value}
          </Link>
        </td>
      )}
      {type === "status" && (
        <td className="font-medium text-sm first:rounded-l-md last:rounded-r-md">
          {value}
        </td>
      )}

      {type === "select" && (
        <td className="font-medium text-sm first:rounded-l-md last:rounded-r-md">
          <select type="text" defaultValue={value} onChange={onChange}>
            <option value={value} disabled>
              {value}
            </option>
            <option value="Нова Пошта">Нова Пошта</option>
            <option value="УкрПошта">УкрПошта</option>
          </select>
        </td>
      )}
    </>
  );
};
