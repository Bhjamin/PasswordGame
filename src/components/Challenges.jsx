import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Challenges = ({ input, challenge, setChallenge }) => {
  const [chal0, setChal0] = useState(false);
  const [chal1, setChal1] = useState(false);
  const [chal2, setChal2] = useState(false);
  const [chal3, setChal3] = useState(false);
  const [chal4, setChal4] = useState(false);
  const [chal5, setChal5] = useState(false);
  const [chal6, setChal6] = useState(false);
  const [chal7, setChal7] = useState(false);
  const [chal8, setChal8] = useState(false)

  useEffect(() => {
    checkInput();
    console.log(challenge);
  }, [input]);

  const checkInput = () => {
    if (chal0 === false) {
      if (/^[a-zA-Z0-9]{5,}$/.test(input)) {
        if (challenge === 0) {
          setChallenge(1);
        }
        setChal0(true);
      }
    }

    if (chal0) {
      if (
        /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9.!@#$%^&*()_+]{5,}$/.test(input)
      ) {
        if (challenge < 2) {
          setChallenge(2);
        }
        setChal1(true);
      } else {
        setChal1(false);
      }
    }

    if (chal1) {
      if (
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9.!@#$%^&*()_+]{5,}$/.test(
          input
        )
      ) {
        if (challenge < 3) {
          setChallenge(3);
        }
        setChal2(true);
      } else {
        setChal2(false);
      }
    }

    if (chal2) {
      if (
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.*Zoey|.*Kane)[a-zA-Z0-9.!@#$%^&*()_+]{5,}$/.test(
          input
        )
      ) {
        if (challenge < 4) {
          setChallenge(4);
        }
        setChal3(true);
      } else {
        setChal3(false);
      }
    }

    if (chal3) {
      if (
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.*Zoey|.*Kane)(?=.*69|.*420)[a-zA-Z0-9.!@#$%^&*()_+]{5,}$/.test(
          input
        )
      ) {
        if (challenge < 5) {
          setChallenge(5);
        }
        setChal4(true);
      } else {
        setChal4(false);
      }
    }

    if (chal4) {
      if (
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.*Zoey|.*Kane)(?=.*69|.*420)(?=.*clabbergirl|.*Clabbergirl|.*ClabberGirl)[a-zA-Z0-9.!@#$%^&*()_+]{5,}$/.test(
          input
        )
      ) {
        if (challenge < 6) {
          setChallenge(6);
        }
        setChal5(true);
      } else {
        setChal5(false);
      }
    }

    if (chal5) {
        if (
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.*Zoey|.*Kane)(?=.*69|.*420)(?=.*clabbergirl|.*Clabbergirl|.*ClabberGirl)(?=.*32)[a-zA-Z0-9.!@#$%^&*()_+]{5,}$/.test(
            input
          )
        ) {
          if (challenge < 7) {
            setChallenge(7);
          }
          setChal6(true);
        } else {
          setChal6(false);
        }
      }

      if (chal6) {
        if (
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.*Zoey|.*Kane)(?=.*69|.*420)(?=.*clabbergirl|.*Clabbergirl|.*ClabberGirl)(?=.*32)(?=.*tavo|.*Tavo)[a-zA-Z0-9.!@#$%^&*()_+]{5,}$/.test(
            input
          )
        ) {
          if (challenge < 8) {
            setChallenge(8);
          }
          setChal7(true);
        } else {
          setChal7(false);
        }
      }

      if (chal7) {
        if (
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.*Zoey|.*Kane)(?=.*69|.*420)(?=.*clabbergirl|.*Clabbergirl|.*ClabberGirl)(?=.*32)(?=.*tavo|.*Tavo)(?=.*pedro|.*Pedro)[a-zA-Z0-9.!@#$%^&*()_+]{5,}$/.test(
            input
          )
        ) {
          if (challenge < 9) {
            setChallenge(9);
          }
          setChal8(true);
        } else {
          setChal8(false);
        }
      }

  };

  return (
    <div className="w-full p-2 gap-4 flex flex-wrap justify-center">
      <AnimatePresence>
        {challenge > 0 ? (
          <motion.div
            key={1}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={`w-full sm:w-[75%] md:w-[50%] lg:w-[32%] shadow-[0_6px_10px_rgb(0,0,0,0.2)] border-[4px] ${
              chal1 ? "border-[#1D7874]" : "border-[#BB342F]"
            } rounded-xl flex overflow-hidden`}
          >
            <div className="w-full flex">
              <div className="w-[15%] sm:w-[10%] flex justify-center items-center bg-[#2E2E3A] p-3 rounded-tl-lg rounded-bl-lg">
                <p className="text-xl md:text-2xl text-white">1</p>
              </div>
              <div className="w-[85%] sm:w-[90%] flex justify-center items-center p-3">
                <p className="text-[10px] sm:text-xs lg:text-base text-black font-medium">
                  Password must contain at least one number
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

        {challenge > 1 ? (
          <motion.div
            key={2}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={`w-full sm:w-[75%] md:w-[50%] lg:w-[32%] shadow-[0_6px_10px_rgb(0,0,0,0.2)] border-[4px] ${
              chal2 ? "border-[#1D7874]" : "border-[#BB342F]"
            } rounded-xl flex overflow-hidden`}
          >
            <div className="w-full flex">
              <div className="w-[15%] sm:w-[10%] flex justify-center items-center bg-[#2E2E3A] p-3 rounded-tl-lg rounded-bl-lg">
                <p className="text-xl md:text-2xl text-white">2</p>
              </div>
              <div className="w-[85%] sm:w-[90%] flex justify-center items-center p-3">
                <p className="text-[10px] sm:text-xs lg:text-base text-black font-medium">
                  Password must contain at least one special character
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

        {challenge > 2 ? (
          <motion.div
            key={3}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={`w-full sm:w-[75%] md:w-[50%] lg:w-[32%] shadow-[0_6px_10px_rgb(0,0,0,0.2)] border-[4px] ${
              chal3 ? "border-[#1D7874]" : "border-[#BB342F]"
            } rounded-xl flex overflow-hidden`}
          >
            <div className="w-full flex">
              <div className="w-[15%] sm:w-[10%] flex justify-center items-center bg-[#2E2E3A] p-3 rounded-tl-lg rounded-bl-lg">
                <p className="text-xl md:text-2xl text-white">3</p>
              </div>
              <div className="w-[85%] sm:w-[90%] flex justify-center items-center p-3">
                <p className="text-[10px] sm:text-xs lg:text-base text-black font-medium">
                  Password must contain the name of one of Alex's dogs
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

        {challenge > 3 ? (
          <motion.div
            key={4}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={`w-full sm:w-[75%] md:w-[50%] lg:w-[32%] shadow-[0_6px_10px_rgb(0,0,0,0.2)] border-[4px] ${
              chal4 ? "border-[#1D7874]" : "border-[#BB342F]"
            } rounded-xl flex overflow-hidden`}
          >
            <div className="w-full flex">
              <div className="w-[15%] sm:w-[10%] flex justify-center items-center bg-[#2E2E3A] p-3 rounded-tl-lg rounded-bl-lg">
                <p className="text-xl md:text-2xl text-white">4</p>
              </div>
              <div className="w-[85%] sm:w-[90%] flex justify-center items-center p-3">
                <p className="text-[10px] sm:text-xs lg:text-base text-black font-medium">
                  Password must contain a funny number
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

        {challenge > 4 ? (
          <motion.div
            key={5}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={`w-full sm:w-[75%] md:w-[50%] lg:w-[32%] shadow-[0_6px_10px_rgb(0,0,0,0.2)] border-[4px] ${
              chal5 ? "border-[#1D7874]" : "border-[#BB342F]"
            } rounded-xl flex overflow-hidden`}
          >
            <div className="w-full flex">
              <div className="w-[15%] sm:w-[10%] flex justify-center items-center bg-[#2E2E3A] p-3 rounded-tl-lg rounded-bl-lg">
                <p className="text-xl md:text-2xl text-white">5</p>
              </div>
              <div className="w-[85%] sm:w-[90%] flex justify-center items-center p-3">
                <p className="text-[10px] sm:text-xs lg:text-base text-black font-medium">
                  Password must contain the name of a special baking soda brand
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

        {challenge > 5 ? (
          <motion.div
            key={6}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={`w-full sm:w-[75%] md:w-[50%] lg:w-[32%] shadow-[0_6px_10px_rgb(0,0,0,0.2)] border-[4px] ${
              chal6 ? "border-[#1D7874]" : "border-[#BB342F]"
            } rounded-xl flex overflow-hidden`}
          >
            <div className="w-full flex">
              <div className="w-[15%] sm:w-[10%] flex justify-center items-center bg-[#2E2E3A] p-3 rounded-tl-lg rounded-bl-lg">
                <p className="text-xl md:text-2xl text-white">6</p>
              </div>
              <div className="w-[85%] sm:w-[90%] flex justify-center items-center p-3">
                <p className="text-[10px] sm:text-xs lg:text-base text-black font-medium">
                  Password must contain the square root of 1024
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

        {challenge > 6 ? (
          <motion.div
            key={7}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={`w-full sm:w-[75%] md:w-[50%] lg:w-[32%] shadow-[0_6px_10px_rgb(0,0,0,0.2)] border-[4px] ${
              chal7 ? "border-[#1D7874]" : "border-[#BB342F]"
            } rounded-xl flex overflow-hidden`}
          >
            <div className="w-full flex">
              <div className="w-[15%] sm:w-[10%] flex justify-center items-center bg-[#2E2E3A] p-3 rounded-tl-lg rounded-bl-lg">
                <p className="text-xl md:text-2xl text-white">7</p>
              </div>
              <div className="w-[85%] sm:w-[90%] flex justify-center items-center p-3">
                <p className="text-[10px] sm:text-xs lg:text-base text-black font-medium">
                  Password must contain the name of a certain restaurant manager
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

        {challenge > 7 ? (
          <motion.div
            key={8}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={`w-full sm:w-[75%] md:w-[50%] lg:w-[32%] shadow-[0_6px_10px_rgb(0,0,0,0.2)] border-[4px] ${
              chal8 ? "border-[#1D7874]" : "border-[#BB342F]"
            } rounded-xl flex overflow-hidden`}
          >
            <div className="w-full flex">
              <div className="w-[15%] sm:w-[10%] flex justify-center items-center bg-[#2E2E3A] p-3 rounded-tl-lg rounded-bl-lg">
                <p className="text-xl md:text-2xl text-white">8</p>
              </div>
              <div className="w-[85%] sm:w-[90%] flex justify-center items-center p-3">
                <p className="text-[10px] sm:text-xs lg:text-base text-black font-medium">
                  Password must contain the name of an alcoholic 
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}

      </AnimatePresence>
    </div>
  );
};

export default Challenges;
