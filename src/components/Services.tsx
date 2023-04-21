import Image from "next/image";
import React from "react";
import Conodes from "public/conodes.svg";
import Managednodes from "public/managed.svg";
import Nodesasaservice from "public/servicenode.svg";
import Rewards from "public/rewards.svg";
import Nodebuildtemplates from "public/template.svg";
import Blockchain from "public/blockchain.svg";
import Frameone from "public/frame1.svg";
import Frametwo from "public/frame2.svg";
type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <div className="p-6 xl:px-52 lg:mx-12 lg:mt-16">
        <h1 className="text-5xl lg:text-7xl font-extrabold my-6 lg:my-12">
          SERVICES
        </h1>
        <div className="flex flex-col gap-8">
          <div className="lg:flex lg:flex-row lg:gap-8">
            {/* 1.conodes */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold lg:text-xl">CO-NODES</h2>
              <p className="text-[#b6b6b6]">
                Collaborative staking among users to pool to achieve threshold
                stake and operate collectively. This democratises participation
                and allows sub-stake holders to benefit from reward protocols.
                It also enables compounding as participants can sweep earned
                rewards into further Co-Nodes
              </p>
              <Image src={Conodes} alt={"Co-nodes"} />
            </div>

            {/*2 Managed Nodes */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold lg:text-xl">MANAGED NODES</h2>
              <p className="text-[#b6b6b6]">
                Outsource node deployment, management, and maintenance to Node
                Army for a small commission of earned rewards. Develop a passive
                yield portfolio with minimum time and skill commitment.
              </p>
              <Image src={Managednodes} alt={"Managednodes"} />
            </div>

            <div className="flex flex-col gap-2">
              <Image src={Frameone} alt={"Frameone"} />

              {/* 3 */}
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold lg:text-xl">NODES AS A SERVICE</h2>
                <p className="text-[#b6b6b6]">
                  An industrial node solution for projects requiring robust
                  decentralised node infrastructures at scale. Node Army
                  collaborates with projects during development phase and
                  through a blockchain lifecycle.
                </p>
                <Image src={Nodesasaservice} alt={"Nodesasaservice"} />
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="lg:flex lg:flex-row gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold lg:text-xl">REWARDS</h2>
              <p className="text-[#b6b6b6]">
                Participate in underlying projects offering rewards for staking,
                validating, and securing their network through a transparent
                process. Node Army does not offer or promote its own Node Army
                yield, but rewards are transparently distributed on the
                blockchain according to the underlying project&apos;s protocol
                and tokenomics.
              </p>
              <Image src={Rewards} alt={"Rewards"} />
            </div>

            {/* 5 */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold lg:text-xl">NODE BUILD TEMPLATES</h2>
                <p className="text-[#b6b6b6]">
                  Easily deploy nodes with pre-built templates hosted in the
                  Marketplaces of premier cloud computing providers. Templates
                  are specific to the different underlying blockchain networks,
                  designed to make deployment seamless.
                </p>
                <Image src={Nodebuildtemplates} alt={"Nodebuildtemplates"} />
              </div>
              <Image src={Frametwo} alt={"Frametwo"} />
            </div>

            {/* 6. blockchain */}
            <div className="flex flex-col gap-4 lg:mt-[390px] xl:mt-[350px]">
              <h2 className="text-2xl lg:text-xl font-bold">BLOCKCHAIN SCALABILITY</h2>
              <p className="text-[#b6b6b6]">
                Leverage scalable blockchain infrastructure and a substantial
                and growing community of committed datapreneurs for rapid and
                effective scaling of blockchain-based applications. Maintain
                high performance and security in a decentralised approach.
              </p>
              <Image src={Blockchain} alt={"Blockchain"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
