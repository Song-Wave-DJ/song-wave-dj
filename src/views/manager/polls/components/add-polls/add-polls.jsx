/* eslint-disable no-restricted-globals */
import { useEffect, useMemo, useState } from "react";
import { Title, Button } from "../../../../../components";
import { message } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const AddPolls = () => {
  const [pollState, setPollState] = useState({
    pollTitle: "",
    questionTitle: "",
  });
  const [options, setOptions] = useState([
    {
      value: "",
      id: self.crypto.randomUUID(),
    },
    {
      value: "",
      id: self.crypto.randomUUID(),
    },
  ]);

  const naviagte = useNavigate();
  const loaction = useLocation();
  const id = useMemo(() => loaction.search?.split("=")[1], [loaction.search]);

  const onAddPollOption = () => {
    setOptions((prev) => {
      const prevObj = structuredClone(prev);
      if (prevObj.length > 9) {
        return prevObj;
      }
      const payload = {
        value: "",
        id: self.crypto.randomUUID(),
      };
      prevObj.push(payload);
      return prevObj;
    });
  };

  const handleOptionChange = (e, id) => {
    const { value } = e.target;
    setOptions((prev) => {
      const prevObj = structuredClone(prev);
      const result = prevObj?.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            value,
          };
        } else return { ...el };
      });
      return result;
    });
  };

  const onDeleteOption = (id) => {
    setOptions((prev) => {
      const prevObj = structuredClone(prev);
      const index = prevObj.findIndex((el) => el.id === id);
      if (index !== -1) {
        prevObj.splice(index, 1);
      }
      return prevObj;
    });
  };

  const onChangeText = (event, name) => {
    const { value } = event.target;
    setPollState((prev) => ({ ...prev, [name]: value }));
  };

  const onPublish = () => {
    const payload = {
      ...pollState,
      options,
    };

    if (!payload.pollTitle?.trim()) {
      message.error("Fill all the fields");
      return;
    }
    const allOptionsNotEmpty = payload?.options.every(
      (option) => option.value?.trim() !== ""
    );

    if (!allOptionsNotEmpty) {
      message.error("Fill all the fields");
      return;
    }
    naviagte("/dashboard/polls");

    console.log(payload);
  };

  useEffect(() => {
    if (id) {
      setPollState({
        pollTitle: "New Data",
        questionTitle: "New",
      });
      setOptions([
        {
          value: "Options1",
          id: self.crypto.randomUUID(),
        },
        {
          value: "Options1",
          id: self.crypto.randomUUID(),
        },
      ]);
    }
  }, [id]);
  return (
    <div className="my-6 p-6 border w-full md:w-1/2 m-auto rounded-lg">
      <div className="flex justify-between my-4">
        <Title label="Add Polls" />
        <div className="flex gap-4">
          <Link to="/dashboard/polls">
            <Button
              isLoading={false}
              label="Cancel"
              bg="rounded-lg !bg-danger"
            />
          </Link>
          <Button
            isLoading={false}
            label="Publish"
            styles="rounded-lg "
            onClick={onPublish}
          />
        </div>
      </div>
      <form action="">
        <div className="flex flex-col mb-4">
          <label className="text-sm mb-2">Poll Title</label>
          <input
            type="text"
            className="p-3 outline-none border rounded-lg"
            placeholder="Poll Title"
            value={pollState.pollTitle}
            onChange={(e) => onChangeText(e, "pollTitle")}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-sm mb-2">Question Title</label>
          <input
            type="text"
            value={pollState.questionTitle}
            placeholder="Question Title"
            className="p-3 outline-none border rounded-lg"
            onChange={(e) => onChangeText(e, "questionTitle")}
          />
        </div>
        <div className="p-4 rounded-lg">
          {options.map((item, idx) => (
            <div className="p-1 rounded-lg" key={item.id}>
              <div className="flex flex-col">
                <div className="flex mt-2 justify-between">
                  <label className="text-xs">Option {idx + 1}</label>
                  {idx !== 0 && idx !== 1 && (
                    <div
                      onClick={() => onDeleteOption(item.id)}
                      className="cursor-pointer text-xs text-danger"
                    >
                      Remove
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  value={item?.value}
                  className="p-3 mt-2 outline-none border rounded-lg"
                  onChange={(e) => handleOptionChange(e, item.id)}
                />
              </div>
            </div>
          ))}
          <div
            className="border-primary border  mt-6 flex justify-center rounded-lg cursor-pointer"
            onClick={onAddPollOption}
          >
            <label
              htmlFor=""
              className="text-center p-3 cursor-pointer text-lg"
            >
              Add Option
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
