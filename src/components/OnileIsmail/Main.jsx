import OnileIsmail from "../../assets/onileIsmail.png";
import OnileIsmailWork from "../../assets/onileIsmailWork.png";

const Main = () => {
  return (
    <main className="mx-0 my-4 px-2 py-0 sm:flex sm:flex-row-reverse sm:px-6">
      <div className="mb-10 mt-4 flex flex-wrap items-center justify-between sm:w-[55%]">
        <div>
          <div className="mb-4 flex items-center justify-between sm:mb-0 sm:justify-around">
            <div className="ml-4">
              <h3 className="text-3xl font-bold capitalize sm:text-5xl">
                Onile Ismail
              </h3>
              <span className="mt-2 block text-sm sm:text-base">
                Photographer and Editor
              </span>
              <span className="mt-2 block text-sm sm:text-base">
                Houston City, Makaveli road. United State.
              </span>
            </div>

            <img
              src={OnileIsmail}
              alt="Onile Ismail Profile"
              className="h-auto w-40"
            />
          </div>

          <p className="px-0 text-center text-sm sm:p-4 sm:text-left sm:text-base">
            This page or place contains a short biography of the designer about
            each of the pictures and every other information he might deem fit
            or worthy to share for assessment by his potential client, it could
            contain the inspiration behind taking those pictures too.... i guess
            its all allowed. might deem fit or worthy to share for assessment by
            his potential client, it could contain the inspiration behind taking
            those pictures too....
          </p>
        </div>

        <div className="flex w-full flex-col items-center sm:w-full sm:items-start">
          <a href="#" className="w-3/4 sm:w-[60%]">
            <button className="mx-auto my-4 w-full rounded-3xl border-2 border-solid border-[#906f4d] bg-[#002a34cc] px-0 py-3 text-base text-[#e1b485]">
              Book this creative
            </button>
          </a>

          <a href="#" className="w-3/4 sm:w-[60%]">
            <button className="mx-auto my-4 w-full rounded-3xl border-2 border-solid border-[#906f4d] bg-[#906f4d] px-0 py-3 text-base text-[#002a34]">
              Other works by this creative
            </button>
          </a>
        </div>
      </div>

      <div className="mb-10 mt-4 flex flex-wrap items-center justify-between sm:w-[44%] sm:items-stretch">
        <img
          src={OnileIsmailWork}
          alt="Onile Ismail Image"
          className="w-full sm:mb-3 sm:w-full"
        />

        <div className="w-full sm:w-full">
          <p className="my-4 text-center sm:my-0 sm:text-left">
            This page or place contain a really explicit description provided y
            the designer about each of the pictures and every other information
            he might deem fit or worthy to share for assessment by his potential
            client, it could contain the inspiration behind taking those
            pictures too.... i guess its all allowed.
          </p>

          <h3 className="mt-8 text-center font-Lora text-2xl font-bold uppercase text-[#b2917f] sm:mt-12 sm:text-left sm:text-3xl">
            The OLUBIRIPO OF AREPO LAND
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Main;
