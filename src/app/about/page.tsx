import Placeholder from '../../assets/images/placeholder.jpg';

export default function AboutComponent() {
  return (
    <div className="flex flex-col pt-20">
      <img
        className="w-full h-[425px] rounded-[25px] border border-white object-cover"
        src={Placeholder.src}
        alt="Alt"
      />
      <h1 className="dark:text-white text-black leading-[180px] text-[150px] max-xl:text-6xl ESRG-TRIAL-font font-normal mt-[15px] mb-[30px] max-xl:mb-[10px] break-words">
        What is Harmony?
      </h1>
      <p className="dark:text-white text-black text-[40px] max-xl:text-[20px] sfpro-font font-normal mt-[35px] mb-[134px]">
        Harmony is an essential app designed to support families and in-home
        caregivers of individuals with long-term conditions, particularly within
        underrepresented and immigrant communities. It serves as an aid to
        alleviate the daily tasks of caregiving by automating scheduling, and
        medication reminders, not to replace the caregiver but to enhance their
        ability to provide care. Harmony tackles cultural and language barriers
        to improve accessibility, ensuring caregivers have the tools they need
        to maintain high-quality care. This app fosters a nurturing environment
        that strengthens community bonds, highlighting the crucial role of
        caregivers in building more connected communities.
      </p>
    </div>
  );
}
