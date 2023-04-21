import Image from 'next/image'
import React from 'react'
import Proofofstake from "public/proof.svg";
import Cloud from "public/cloud.svg";
import Framethree from "public/frame3.svg";
import Nodearmy from "public/nodearmy.svg";

type Props = {}

const EnvironmentStatement = (props: Props) => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-5xl font-extrabold my-6">ENVIRONMENT STATEMENT</h1>
        <div className="flex flex-col gap-8">

          {/* 1.proof of stake */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">CO-NODES</h2>
            <p className="text-[#b6b6b6]">
              Collaborative staking among users to pool to achieve threshold
              stake and operate collectively. This democratises participation
              and allows sub-stake holders to benefit from reward protocols. It
              also enables compounding as participants can sweep earned rewards
              into further Co-Nodes
            </p>
            <Image src={Proofofstake} alt={"Proofofstake"} />
          </div>

          {/*2 Cloud computing  */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">MANAGED NODES</h2>
            <p className="text-[#b6b6b6]">
              Outsource node deployment, management, and maintenance to Node
              Army for a small commission of earned rewards. Develop a passive
              yield portfolio with minimum time and skill commitment.
            </p>
            <Image src={Cloud} alt={"cloud"} />
          </div>

          <Image src={Framethree} alt={"Framethree"} />

          {/* 3 Node army*/}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">NODES AS A SERVICE</h2>
            <p className="text-[#b6b6b6]">
              An industrial node solution for projects requiring robust
              decentralised node infrastructures at scale. Node Army
              collaborates with projects during development phase and through a
              blockchain lifecycle.
            </p>
            <Image src={Nodearmy} alt={"Nodearmy"} />
          </div>

       
        </div>
      </div>
    </div>
  )
}

export default EnvironmentStatement