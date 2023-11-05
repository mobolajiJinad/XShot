const Main = () => {
  return (
    <main className="mx-auto my-6">
      <h2 className="text-center  font-Lora text-sm font-bold uppercase">
        pricing
      </h2>
      <h1 className="mx-auto mb-7 mt-3 text-center font-Lora text-sm font-bold normal-case">
        Take a look at our packages
      </h1>

      <PricingContainer
        name={"basic"}
        text={
          "This page or place contain a really explicit description provided y the designer about each of the pictures and every other information he might deem fit or worthy to share for assessment by his potential client, it could contain the inspiration behind taking those pictures too.... i guess its all allowed."
        }
        price={"150"}
      />

      <PricingContainer
        name={"standard"}
        text={
          "This page or place contain a really explicit description provided y the designer about each of the pictures and every other information he might deem fit or worthy to share for assessment by his potential client, it could contain the inspiration behind taking those pictures too.... i guess its all allowed."
        }
        price={"300"}
      />

      <PricingContainer
        name={"premium"}
        text={
          "This page or place contain a really explicit description provided y the designer about each of the pictures and every other information he might deem fit or worthy to share for assessment by his potential client, it could contain the inspiration behind taking those pictures too.... i guess its all allowed."
        }
        price={"450"}
      />
    </main>
  );
};

const PricingContainer = ({ name, text, price }) => {
  return (
    <div className="border-b-solid mx-auto mb-8 mt-4 w-[85%] border-b-2 border-b-[#E1B485] px-2 pb-2 sm:mb-16 sm:px-0 sm:pb-8">
      <h3 className="font-Lora text-2xl font-bold capitalize">{name}</h3>

      <div className="mx-0 my-4 flex flex-wrap items-center justify-between">
        <p className="mb-3 w-full text-sm text-[#002A34] sm:mb-0 sm:w-1/2 sm:text-lg">
          {text}
        </p>

        <span className="font-Lora text-xl capitalize text-[#002A34] no-underline">
          ${price}
        </span>

        <a
          href="#"
          className="font-Lora text-xl capitalize text-[#002A34] no-underline"
        >
          book now &rarr;
        </a>
      </div>
    </div>
  );
};

export default Main;
