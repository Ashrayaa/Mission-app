import React from "react";
import { useState } from "react";

interface FAQparameters {
  question: string;
  answer: string;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const Section = ({
  question,
  answer,
  isVisible,
  setIsVisible,
}: FAQparameters) => {
  return (
    <div className="flex flex-col gap-3 justify-center mx-2 xl:mx-48 2xl:mx-64 rounded-xl py-2">
      <div className="flex justify-between gap-8">
        <h2 className=" md:text-left xl:text-lg xl:leading-9">{question}</h2>
        {isVisible ? (
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg> 
          </button>
        ) : (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          
          </button>
        )}
      </div>
      <div
        className={`max-h-0 ${
          isVisible ? "max-h-[300px]" : ""
        } overflow-hidden transition-all duration-700`}
      >
        <p className="text-[#C0C0C8] text-sm md:text-left xl:text-lg xl:leading-9">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <section className="text-white p-5">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-5xl font-extrabold my-6">FREQUENTLY ASKED</h1>
        <div className="flex flex-col gap-3">
          <Section
            question={"WHAT IS NODE ARMY?"}
            answer={
              "Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes."
            }
            isVisible={visibleSection == "One"}
            setIsVisible={(reveal) => {
              if (reveal) {
                setVisibleSection("One");
              } else {
                setVisibleSection("");
              }
            }}
          />
          <Section
            question={"HOW CAN I BENEFIT FROM USING NODE ARMY"}
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            isVisible={visibleSection == "Two"}
            setIsVisible={(reveal) => {
              if (reveal) {
                setVisibleSection("Two");
              } else {
                setVisibleSection("");
              }
            }}
          />

          <Section
            question={"DO I NEED TECHNICAL EXPERTISE TO USE NODE ARMY?"}
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            isVisible={visibleSection == "Three"}
            setIsVisible={(reveal) => {
              if (reveal) {
                setVisibleSection("Three");
              } else {
                setVisibleSection("");
              }
            }}
          />

          <Section
            question={"WHAT KIND OF SUPPORT DOES NODE ARMY PROVIDE?"}
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            isVisible={visibleSection == "Four"}
            setIsVisible={(reveal) => {
              if (reveal) {
                setVisibleSection("Four");
              } else {
                setVisibleSection("");
              }
            }}
          />
          <Section
            question={"HOW DO I GET STARTED WITH NODE ARMY?"}
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            isVisible={visibleSection == "Five"}
            setIsVisible={(reveal) => {
              if (reveal) {
                setVisibleSection("Five");
              } else {
                setVisibleSection("");
              }
            }}
          />
          <Section
            question={"HOW WILL I BE REWARDED BY USING NODE ARMY?"}
            answer={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            isVisible={visibleSection == "Six"}
            setIsVisible={(reveal) => {
              if (reveal) {
                setVisibleSection("Six");
              } else {
                setVisibleSection("");
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default FAQ;
