const ValueCard = (props: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="max-xl:min-h-[250px] min-h-[350px] w-full p-[34px] bg-[#181716] rounded-[20px] grid grid-rows-[auto_1fr] gap-[10px] justify-items-start max-md:p-[20px] max-md:max-w-full max-sm:p-[15px]">
      <div className="w-full grid grid-rows-[auto_auto] gap-[6px]">
        <p className="text-[#737373] text-[1.4rem] font-[400] ESRG-TRIAL-font break-words max-md:text-[1.2rem] ">
          {props.number}
        </p>
        <p className="text-white text-[2rem] font-[500] ESRG-TRIAL-font break-words max-md:text-[1.5rem]">
          {props.title}
        </p>
      </div>
      <p className="text-[#dcdcdc] text-[1.4rem] font-[400] sfpro-font break-words max-w-full max-md:text-[1.2rem] max-sm:text-[1rem]">
        {props.description}
      </p>
    </div>
  );
};
export default ValueCard;
