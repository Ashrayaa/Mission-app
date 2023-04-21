import Image from "next/image";
import React from "react";
import Proofofstake from "public/proof.svg";
import Cloud from "public/cloud.svg";
import Framethree from "public/frame3.svg";
import Nodearmy from "public/nodearmy.svg";

type Props = {};

const EnvironmentStatement = (props: Props) => {
  return (
    <div>
      <div className="p-6 xl:px-52 lg:mx-12 lg:mt-16">
        <h1 className="text-5xl lg:text-7xl font-extrabold my-6 lg:my-12">
          ENVIRONMENT STATEMENT
        </h1>
        <div className="flex flex-col gap-8">
          <div className="lg:flex gap-8">
            {/* 1.proof of stake */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">PROOF OF STAKE</h2>
              <p className="text-[#b6b6b6]">
                Proof of stake blockchain validation is more environmentally
                friendly than proof of work, as it consumes significantly less
                energy by not requiring computational puzzles to be solved.
                Validators are selected based on cryptocurrency holdings,
                reducing the carbon footprint of the network. Unless directly
                disclosed none of the projects we support will operate through
                Proof of Work.
              </p>
              <Image src={Proofofstake} alt={"Proofofstake"} />
            </div>

            {/*2 Cloud computing  */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">CLOUD COMPUTING</h2>
                <p className="text-[#b6b6b6]">
                  Cloud computing provides more efficient resource usage ,
                  reducing the need for physical hardware and lowering the
                  carbon footprint of the network. Other benefits include
                  increased scalability, faster transaction speeds, and improved
                  accessibility. Overall, cloud computing provides an
                  eco-friendly and efficient solution for validating and
                  recording transactions on PoS blockchains.
                </p>
                <Image src={Cloud} alt={"cloud"} />
              </div>

              <Image src={Framethree} alt={"Framethree"} />
            </div>
            <div className="flex flex-col gap-4 lg:mt-[470px] xl:mt-[410px] 2xl:mt-[400px]">
            <h2 className="text-2xl font-bold">NODES ARMY</h2>
            <p className="text-[#b6b6b6]">
              We regularly review cloud computing platforms to ensure you can
              choose from proven, reliable, scalable and environmentally
              responsible providers. Node Army will endeavor to integrate a
              energy utilization metric to our and your dashboards in the near
              future for transparency of impact
            </p>
            <Image src={Nodearmy} alt={"Nodearmy"} />
          </div>
          </div>
          {/* 3 Node army*/}
         
        </div>
      </div>
    </div>
  );
};

export default EnvironmentStatement;
