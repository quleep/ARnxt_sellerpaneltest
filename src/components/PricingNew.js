import React, { useEffect } from "react";
import Navbartest from "./Navbartest";
import Navbarhome from "./Navbarhome";

function PricingNew() {
  useEffect(() => {
    let tabs = document.querySelectorAll(".tab1");
    let indicator = document.querySelector(".indicator");
    let panels = document.querySelectorAll(".tab-panel");

    indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indicator.style.left =
      tabs[0].getBoundingClientRect().left -
      tabs[0].parentElement.getBoundingClientRect().left +
      "px";

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls");

        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left =
          tab.getBoundingClientRect().left -
          tab.parentElement.getBoundingClientRect().left +
          "px";

        panels.forEach((panel) => {
          let panelId = panel.getAttribute("id");
          if (tabTarget === panelId) {
            panel.classList.remove("invisible", "opacity-0");
            panel.classList.add("visible", "opacity-100");
          } else {
            panel.classList.add("invisible", "opacity-0");
          }
        });
      });
    });
  }, []);

  return (
    <>
      <Navbarhome />
      <div class="max-w-full mx-auto px-8 sm:px-0 mt-8">
        <div class="sm:w-5xl ">
          <div
            role="tablist"
            aria-label="tabs"
            class="relative w-1/5	 mx-auto h-12 grid grid-cols-2 items-center px-[3px] rounded-full bg-gray-200 overflow-hidden shadow-xl shadow-900/20 transition">
            <div class="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-lime-300 shadow-md"></div>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabindex="0"
              class="relative block h-10 px-6 tab1 rounded-full">
              <span class="text-gray-800">Monthly</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabindex="-1"
              class="relative block h-10 px-6 tab1 rounded-full w-full">
              <span class="text-gray-800">Yearly</span>
            </button>
          </div>
          <div class="mt-6 relative rounded-3xl">
            <div
              role="tabpanel"
              id="panel-1"
              class="tab-panel p-6 transition duration-300">
              <section className="relative z-10 overflow-hidden bg-white pb-12 pt-1 dark:bg-dark lg:pb-[90px] lg:pt-1">
                <div className="container flex flex-col mx-auto">
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                      <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                        <h2 className="dmsans mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                          Our Pricing Plan
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="-mx-4 flex flex-wrap">
                      <PricingCard
                        type="Personal"
                        price="$59"
                        subscription="year"
                        description="Perfect for using in a personal website or a client project."
                        buttonText="Choose Personal">
                        <List>1 User</List>
                        <List>All UI components</List>
                        <List>Lifetime access</List>
                        <List>Free updates</List>
                        <List>Use on 1 (one) project</List>
                        <List>3 Months support</List>
                      </PricingCard>
                      <PricingCard
                        type="Business"
                        price="$199"
                        subscription="year"
                        description="Perfect for using in a personal website or a client project."
                        buttonText="Choose Business"
                        active>
                        <List>5 User</List>
                        <List>All UI components</List>
                        <List>Lifetime access</List>
                        <List>Free updates</List>
                        <List>Use on31 (Three) project</List>
                        <List>4 Months support</List>
                      </PricingCard>
                      <PricingCard
                        type="Professional"
                        price="$256"
                        subscription="year"
                        description="Perfect for using in a personal website or a client project."
                        buttonText="Choose Professional">
                        <List>Unlimited User</List>
                        <List>All UI components</List>
                        <List>Lifetime access</List>
                        <List>Free updates</List>
                        <List>Unlimited project</List>
                        <List>12 Months support</List>
                      </PricingCard>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              role="tabpanel"
              id="panel-2"
              class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300">
              <h2 class="text-xl font-semibold text-gray-800">
                Second tab panel
              </h2>
              <p class="mt-4 text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                dolores voluptate temporibus, atque ab eos, delectus at ad hic
                voluptatem veritatis iure, nulla voluptates quod nobis
                doloremque eaque! Perferendis, soluta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingNew;

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
          <span className="mb-3 block text-lg font-semibold text-primary dmsans text-left">
            {type}
          </span>

          <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white dmsans text-left">
            {price}
            <span className="text-base font-medium text-body-color dark:text-dark-6 dmsans">
              / {subscription}
            </span>
          </h2>
          <p className="dmsans mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6 text-left">
            {description}
          </p>
          <div className="mb-9 flex flex-col gap-[14px] dmsans text-left">
            {children}
          </div>
          <button
            className={` ${
              active
                ? " dmsans block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                : " dmsans block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
            } `}>
            {buttonText}
          </button>
          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-4 top-4 z-[-1]">
              <svg
                width={41}
                height={89}
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6 dmsans">
      {children}
    </p>
  );
};
