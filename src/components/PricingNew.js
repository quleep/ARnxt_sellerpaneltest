import React, { useEffect } from "react";
import Navbartest from "./Navbartest";
import Navbarhome from "./Navbarhome";
import { PopupButton } from "react-calendly";
import Footercomponent from "./Footercomponent";

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
            class="relative w-full sm:w-1/5	 mx-auto h-12 grid grid-cols-2 items-center px-[3px] rounded-full bg-gray-200 overflow-hidden shadow-xl shadow-900/20 transition">
            <div class="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-lime-300 shadow-md"></div>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabindex="0"
              class="relative block h-10 px-6 tab1 rounded-full">
              <span class="text-gray-800">Quarterly</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabindex="-1"
              class="relative block h-10 px-6 tab1 rounded-full w-full">
              <span class="text-gray-800">Annually</span>
            </button>
          </div>
          <div class="mt-6 relative rounded-3xl">
            <div
              role="tabpanel"
              id="panel-1"
              class="tab-panel p-6 transition duration-300">
              <section className="relative z-10 overflow-hidden bg-white pb-12 pt-1 dark:bg-dark lg:pb-[20px] lg:pt-1">
                <div className=" flex flex-col mx-auto">
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                      <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                        <h2 className="dmsans mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                          Our Pricing Plan
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center items-center ">
                    <div className="-mx-4 flex flex-wrap w-[95%] ">
                      <PricingCard
                        type="Starter"
                        price="₹9999"
                        subscription="quarterly"
                        description=""
                        buttonText="Choose Starter">
                        <List>25 (No. of Products)</List>
                        <List>10k (No. of Views)</List>
                        <List>QR Code Access</List>
                      </PricingCard>
                      <PricingCard
                        type="Basic"
                        price="₹49999"
                        subscription="quarterly"
                        description=""
                        buttonText="Choose Basic"
                        active>
                        <List>100 (No. of Products)</List>
                        <List>60k (No. of Views)</List>
                        <List>QR Code Access</List>
                      </PricingCard>
                      <PricingCard
                        type="Premium"
                        price="₹99999"
                        subscription="quarterly"
                        description=""
                        buttonText="Choose Premium">
                        <List>500 (No. of Products)</List>
                        <List>200k (No. of Views)</List>
                        <List>QR Code Access</List>
                        <List>Dedicated Account Manager</List>
                      </PricingCard>
                      <PricingCard
                        type="Business Pro"
                        price="Custom "
                        subscription="quarterly"
                        description=""
                        buttonText="Choose Premium">
                        <List>Unlimited (No. of Products)</List>
                        <List>Unlimited (No. of Views)</List>
                        <List>QR Code Access</List>
                        <List>Dedicated Account Manager</List>
                      </PricingCard>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              role="tabpanel"
              id="panel-2"
              class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300 w-full">
              <section className="relative z-10 overflow-hidden w-full pb-12 pt-1 dark:bg-dark lg:pb-[20px] lg:pt-1">
                <div className=" flex flex-col mx-auto">
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                      <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                        <h2 className="dmsans mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                          Our Pricing Plan
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center items-center ">
                    <div className="-mx-4 flex flex-wrap w-[95%] ">
                      <PricingCard
                        type="Starter"
                        price="₹29999"
                        subscription="Yearly"
                        description=""
                        buttonText="Choose Starter">
                        <List>25 (No. of Products)</List>
                        <List>50k (No. of Views)</List>
                        <List>QR Code Access</List>
                      </PricingCard>
                      <PricingCard
                        type="Basic"
                        price="₹129999"
                        subscription="Yearly"
                        description=""
                        buttonText="Choose Basic"
                        active>
                        <List>100 (No. of Products)</List>
                        <List>240k (No. of Views)</List>
                        <List>QR Code Access</List>
                      </PricingCard>
                      <PricingCard
                        type="Premium"
                        price="₹369999"
                        subscription="Yearly"
                        description=""
                        buttonText="Choose Premium">
                        <List>500 (No. of Products)</List>
                        <List>Unlimited (No. of Views)</List>
                        <List>QR Code Access</List>
                        <List>Dedicated Account Manager</List>
                      </PricingCard>
                      <PricingCard
                        type="Business Pro"
                        price="Custom "
                        subscription="Yearly"
                        description=""
                        buttonText="Choose Premium">
                        <List>Unlimited (No. of Products)</List>
                        <List>Unlimited (No. of Views)</List>
                        <List>QR Code Access</List>
                        <List>Dedicated Account Manager</List>
                      </PricingCard>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div class="min-h-auto bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
        <div class="max-w-7xl mx-auto">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>

              <div class="space-y-2 flex flex-col justify-center items-center">
                <p class="text-slate-800 text-lg font-bold dmsans">
                  Add-ons available
                </p>
                <p class="text-slate-800">
                  We have add-ons available for additional views of products.
                  Get in touch with us to upgrade.
                </p>
                <PopupButton
                  className="bg-indigo-600 hover:bg-indigo-800 dmsans block w-1/4 rounded-md border border-primary p-1 text-center text-base font-medium text-white transition hover:scale-105 ease-in-out duration-200"
                  url="https://calendly.com/arnxt-meet/30min"
                  rootElement={document.getElementById("root")}
                  text="Contact us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footercomponent />
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
      <div className="w-full px-2 md:w-1/2 lg:w-1/4 ">
        <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px] h-[95%]">
          <span className="mb-3 block text-lg font-semibold text-primary dmsans text-left">
            {type}
          </span>

          <h2 className="mb-5 text-[32px] font-bold text-dark dark:text-white dmsans text-left">
            {price}
            <span className="text-base font-medium text-body-color dark:text-dark-6 dmsans">
              / {subscription}
            </span>
          </h2>
          <button class=" bg-indigo-600 hover:bg-indigo-800 dmsans block w-full rounded-lg border border-primary p-3 text-center text-base font-medium text-white transition hover:scale-105 ease-in-out duration-200">
            {buttonText}
          </button>
          <p className="dmsans mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6 text-left">
            {description}
          </p>

          <div className="mb-9 flex flex-col gap-[14px] dmsans text-left">
            {children}
          </div>

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
    <div className="flex flex-row gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="green"
        class="w-5 h-5">
        <path
          fill-rule="evenodd"
          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clip-rule="evenodd"
        />
      </svg>
      <p className="text-base text-body-color dark:text-dark-6 dmsans">
        {children}
      </p>
    </div>
  );
};
