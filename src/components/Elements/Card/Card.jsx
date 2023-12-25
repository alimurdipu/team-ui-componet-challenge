import React from "react";
import SimpleCard from "./SimpleCard";
import RoundedCard from "./RoundedCard";
import BorderCard from "./BorderCard";
import PrimeryCard from "./PrimeryCard";
import Secondery from "./Secondery";
import InfoCard from "./InfoCard";
import SucessCard from "./SucessCard";
import WarningCard from "./WarningCard";
import ErrorCard from "./ErrorCard";
import GlowCrad from "./GlowCrad";
import GlowCardOrange from "./GlowCardOrange";
import GlowCardBlue from "./GlowCardBlue";
import GradientCard1 from "./GradientCard1";
import GradientCard2 from "./GradientCard2";
import GradientCard3 from "./GradientCard3";
import Outline1 from "./Outline1";
import Outline2 from "./Outline2";
import Outline3 from "./Outline3";

const Card = () => {
  return <div className=" mx-4 my-4 gap-4 bg-gray-100 min-h-screen grid grid-cols-3">
    <SimpleCard />
    <RoundedCard />
    <BorderCard />
    <PrimeryCard />
    <Secondery />
    <InfoCard />
    <SucessCard />
    <WarningCard />
    <ErrorCard />
    <GlowCrad />
    <GlowCardOrange />
    <GlowCardBlue />
    <GradientCard1 />
    <GradientCard2 />
    <GradientCard3 />
    <Outline1/>
    <Outline2/>
    <Outline3 />
    </div>;
};

export default Card;
