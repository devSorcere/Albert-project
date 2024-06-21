<template>
  <div class="flex">
    <div class="font-gelica">
      <div class="mt-5 mobile font-degular">
        <div
          class="col-span-2 gradient w-full border-[#FFFFFF4D] border-[0.5px] rounded-[32px]"
        >
          <div class="flex items-center justify-between p-8">
            <div>
              <div class="text-[48px] font-bold">2 300 €</div>
              <div class="text-[16px] text-white/70">Mon solde actuel</div>
            </div>
            <div
              class="flex bg-[#7971F5] rounded-[16px] gap-2 items-center py-[11px] px-10"
            >
              <div>
                <img :src="UpArrow" alt="" />
              </div>
              <div>Virer de l`argent</div>
            </div>
          </div>
          <hr class="border-[#30302f] w-full" />
          <div class="flex items-center justify-between p-8">
            <div class="flex gap-[71px]">
              <div>
                <div class="font-bold text-[24px]">6 000 €</div>
                <div class="text-[12px] text-white/70">Montant à venir</div>
              </div>
              <div>
                <div class="font-bold text-[24px]">12 150 €</div>
                <div class="text-[12px] text-white/70">Montant en cours</div>
              </div>
            </div>
            <div
              class="h-[37px] border-[#FFFFFF]/40 px-[21px] rounded-[19px] py-2 border-[1px] text-[16px] w-[112px]"
            >
              Historique
            </div>
          </div>
        </div>
      </div>
      <div class="mb-[19px]">
        <div class="flex items-center justify-between pt-5 pb-6 pl-6 text-white">
          <div class="text-[32px] font-light">Lives</div>
          <div class="flex gap-[8px] items-center">
            <div class="mr-2 text-lg font-degular">Tout voir</div>
            <div>
              <img :src="PrevArrow" alt="" />
            </div>
            <div>
              <img :src="NextArrow" alt="" />
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div
            class="rounded-[32px] pt-[22px] px-[18px] pb-4 w-[427px] bg-[#0e1928] border-[#7971F5] border-[0.5px]"
          >
            <div class="px-1">
              <div class="relative">
                <img :src="CardImgLives" class="h-[191px]" alt="" />
                <div class="absolute bottom-0 right-0 pr-1 text-right">
                  <div class="text-2xl font-bold font-degular">2 Jan · 7Nov</div>
                  <div class="text-[15px] lowercase font-degular">2/23 lives</div>
                </div>
              </div>
              <div class="mt-6 mb-[31px] text-2xl font-light">
                Analyste en cybersécurité
              </div>
            </div>
            <div class="flex items-center justify-between pl-1">
              <div class="flex gap-2">
                <div class="flex gap-[6px] bg-[#27303e] rounded-[19px] p-[3px] w-[63px]">
                  <div class="">
                    <img :src="CommentIcon" class="w-[22px]" alt="" />
                  </div>
                  <div class="text-[14px] text-[#FFFFFF]/60 font-degular">3</div>
                </div>
                <div class="flex gap-[6px] bg-[#27303e] rounded-[19px] p-[3px] w-[63px]">
                  <div class="">
                    <img :src="GroupIcon" class="w-[22px]" alt="" />
                  </div>
                  <div class="text-[14px] text-[#FFFFFF]/60 font-degular">50</div>
                </div>
              </div>
              <div
                class="text-[16px] p-[3px] rounded-[34px] border-[#35368a] border-[0.3px]"
              >
                <div
                  class="text-[16px] p-[3px] rounded-[34px] border-[#5d54f0] border-[0.6px]"
                >
                  <div
                    class="h-[37px] flex gap-[14px] text-[16px] py-[8px] px-[21px] rounded-[34px] bg-[#7971F5] items-center"
                  >
                    <div class="font-medium font-degular">Démarrer le live</div>
                    <div><img :src="PlayIcon" alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="rounded-[32px] pt-[22px] px-[18px] pb-4 w-[427px] bg-[#0A1718] border-[#FFFFFF4D] border-[0.5px]"
          >
            <div class="px-1">
              <div class="relative">
                <img :src="CardImgLives" class="h-[191px]" alt="" />
                <div class="absolute bottom-0 right-0 pr-1 text-right">
                  <div class="text-2xl font-bold font-degular">2 Jan · 7Nov</div>
                  <div class="text-[15px] lowercase font-degular">2/23 lives</div>
                </div>
              </div>
              <div class="mt-6 mb-[31px] text-2xl font-light">
                Analyste en cybersécurité
              </div>
            </div>
            <div class="flex items-center justify-between pl-1">
              <div class="flex gap-2">
                <div
                  class="flex text-[#FFFFFF]/60 gap-[6px] bg-[#27303e] rounded-[19px] p-[3px] w-[63px]"
                >
                  <div class="">
                    <img :src="CommentIcon" class="w-[22px]" alt="" />
                  </div>
                  <div class="text-[14px] text-[#FFFFFF]/60 font-degular">3</div>
                </div>
                <div class="flex gap-[6px] bg-[#27303e] rounded-[19px] p-[3px] w-[63px]">
                  <div class="">
                    <img :src="GroupIcon" class="w-[22px]" alt="" />
                  </div>
                  <div class="text-[14px] text-[#FFFFFF]/60 font-degular">50</div>
                </div>
              </div>
              <div
                class="text-[16px] p-[3px] rounded-[34px] border-[#0A1718] border-[0.3px]"
              >
                <div
                  class="text-[16px] p-[3px] rounded-[34px] border-[#0A1718] border-[0.6px]"
                >
                  <div
                    class="h-[37px] flex gap-[14px] text-[16px] py-[8px] px-[21px] rounded-[34px] bg-[#232f30] items-center text-[#FFFFFF]/60"
                  >
                    <div class="font-medium font-degular">Démarrer le live</div>
                    <div><img :src="PlayIcon" class="opacity-60" alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-8">
        <div class="flex items-center justify-between pt-5 pb-6 pl-6 text-white">
          <div class="text-[32px] font-light">Cours</div>
          <div class="flex gap-[8px] items-center">
            <div class="mr-2 text-lg">Tout voir</div>
            <div>
              <img :src="PrevArrow" alt="" />
            </div>
            <div>
              <img :src="NextArrow" alt="" />
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div
            class="rounded-[32px] pt-[22px] px-[18px] pb-4 w-[427px] bg-[#0A1718] border-[#FFFFFF4D] border-[0.5px]"
          >
            <div class="px-1">
              <div class="relative">
                <img :src="CardImg" class="h-[191px]" alt="" />
                <div class="absolute bottom-0 right-0 pr-1 text-right">
                  <div class="text-2xl font-bold font-degular">12</div>
                  <div class="text-[15px] lowercase font-degular">Leçons</div>
                </div>
              </div>
              <div class="mt-6 mb-[31px] text-2xl font-light">ReactJs</div>
            </div>
            <div class="flex items-center justify-between pl-[2px]">
              <div class="flex gap-2">
                <div class="flex gap-[6px] bg-[#27303e] rounded-[19px] p-[3px] w-[63px]">
                  <div class="">
                    <img :src="CommentIcon" class="w-[22px]" alt="" />
                  </div>
                  <div class="text-[14px] text-[#FFFFFF]/60 font-degular">0</div>
                </div>
                <div class="flex gap-[6px] bg-[#27303e] rounded-[19px] p-[3px] w-[63px]">
                  <div class="">
                    <img :src="GroupIcon" class="w-[22px]" alt="" />
                  </div>
                  <div class="text-[14px] text-[#FFFFFF]/60 font-degular">122</div>
                </div>
              </div>
              <div
                class="h-[37px] flex gap-[14px] text-[16px] border-[#FFFFFF]/60 border-[1px] py-[8px] px-[21px] rounded-[34px] bg-transparent items-center"
              >
                <div class="text-[#FFFFFF]/60 font-medium font-degular">
                  Démarrer le live
                </div>
                <div><img :src="PlayIcon" alt="" class="opacity-60" /></div>
              </div>
            </div>
          </div>
          <div
            class="rounded-[32px] pt-[22px] px-[18px] pb-4 w-[427px] bg-[#0A1718] border-[#FFFFFF4D] border-[0.5px]"
          >
            <div class="px-1">
              <div class="relative">
                <img :src="CardImg" class="h-[191px]" alt="" />
                <div class="absolute bottom-0 right-0 pr-1 text-right">
                  <div class="text-2xl font-bold font-degular">12</div>
                  <div class="text-[15px] lowercase font-degular">Leçons</div>
                </div>
              </div>
              <div class="mt-6 mb-[31px] text-2xl font-light">HTML5/CSS3</div>
            </div>
            <div class="flex items-center justify-between pl-1">
              <div class="flex gap-2">
                <div class="flex gap-[6px] bg-[#27303e] rounded-[19px] p-[3px] w-[63px]">
                  <div class="">
                    <img :src="CommentIcon" class="w-[22px]" alt="" />
                  </div>
                  <div class="text-[14px] text-[#FFFFFF]/60 font-degular">0</div>
                </div>
                <div class="flex gap-[6px] bg-[#27303e] rounded-[19px] p-[3px] w-[63px]">
                  <div class="">
                    <img :src="GroupIcon" class="w-[22px]" alt="" />
                  </div>
                  <div class="text-[14px] text-[#FFFFFF]/60 font-degular">122</div>
                </div>
              </div>
              <div
                class="h-[37px] flex gap-[14px] text-[16px] border-[#FFFFFF]/60 border-[1px] py-[8px] px-[21px] rounded-[34px] bg-transparent items-center"
              >
                <div class="text-[#FFFFFF]/60 font-medium font-degular">
                  Démarrer le live
                </div>
                <div><img :src="PlayIcon" alt="" class="opacity-60" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 pl-5 font-degular">
      <div class="grid gap-4 right-grid">
        <div
          class="col-span-2 gradient w-full border-[#FFFFFF4D] border-[0.5px] rounded-[32px] desktop"
        >
          <div class="flex items-center justify-between p-8">
            <div>
              <div class="text-[48px] font-bold">2 300 €</div>
              <div class="text-[16px] text-white/70">Mon solde actuel</div>
            </div>
            <div
              class="flex bg-[#7971F5] rounded-[16px] gap-2 items-center py-[11px] px-10"
            >
              <div>
                <img :src="UpArrow" alt="" />
              </div>
              <div>Virer de l`argent</div>
            </div>
          </div>
          <hr class="border-[#30302f] w-full" />
          <div class="flex items-center justify-between p-8">
            <div class="flex gap-[71px]">
              <div>
                <div class="font-bold text-[24px]">6 000 €</div>
                <div class="text-[12px] text-white/70">Montant à venir</div>
              </div>
              <div>
                <div class="font-bold text-[24px]">12 150 €</div>
                <div class="text-[12px] text-white/70">Montant en cours</div>
              </div>
            </div>
            <div
              class="h-[37px] border-[#FFFFFF]/40 px-[21px] rounded-[19px] py-2 border-[1px] text-[16px] w-[112px]"
            >
              Historique
            </div>
          </div>
        </div>
        <div
          class="rounded-[32px] bg-gradient-to-t from-[#000000] to-[#0E2825] border-[#FFFFFF4D] border-[0.5px]"
        >
          <div class="px-[63px] pt-[61px] flex justify-center">
            <div class="circle-bar-chart">
              <svg viewBox="-0.5 -0.5 37 37" class="circular-chart">
                <path
                  class="circle-bg"
                  d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle"
                  :stroke-dasharray="percentage + ', 100'"
                  d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="font-bold percentage font-degular">
                  {{ percentage }}%
                </text>
              </svg>
            </div>
          </div>
          <div class="flex items-center justify-between px-[38px] pb-10 mt-[56px]">
            <div>
              <div class="text-[40px] font-bold text-center">12</div>
              <div class="text-center text-[16px] text-white/70">Lives à venir</div>
            </div>

            <div class="text-[24px] text-white/70">|</div>
            <!-- <div class=" h-[24px] w-[1px] border-1px border-l-white/70"> </div> -->

            <div>
              <div class="text-[40px] font-bold text-center">20</div>
              <div class="text-center text-[16px] text-white/70">Lives terminés</div>
            </div>
          </div>
        </div>
        <div
          class="rounded-[32px] p-8 bg-gradient-to-t from-[#000000] to-[#0E2825] border-[#FFFFFF4D] border-[0.5px] flex flex-col justify-between"
        >
          <div>
            <div class="text-[40px] font-bold">12.300 €</div>
            <div class="text-white/70 text-[16px]">Chiffres d’affaires</div>
          </div>
          <div>
            <div class="flex justify-end translate-y-10">
              <div
                class="flex items-center text-[#020F11] gap-2 py-2 px-[6px] rounded-[10px] bg-[#D9F777]"
              >
                <div><img :src="URArrow" alt="" /></div>
                <div>5.02%</div>
              </div>
            </div>
            <div id="area-chart">
              <apexchart
                type="area"
                height="200"
                width="100%"
                :options="chartOptions"
                :series="series"
              ></apexchart>
            </div>
          </div>
        </div>
        <div
          class="rounded-[32px] bg-gradient-to-t from-[#000000] to-[#0E2825] border-[#FFFFFF4D] border-[0.5px] py-10 pl-8 pr-[27.5px]"
        >
          <div class="flex justify-center mb-[6px]">
            <img :src="VideoIcon" alt="" />
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="text-[40px] font-bold text-center">2</div>
              <div class="text-center text-[16px] text-white/70">Cours Actives</div>
            </div>

            <div class="text-[24px] text-white/70">|</div>
            <!-- <div class=" h-[24px] w-[1px] border-1px border-l-white/70"> </div> -->

            <div>
              <div class="text-[40px] font-bold text-center">7</div>
              <div class="text-center text-[16px] text-white/70">Cours terminés</div>
            </div>
          </div>
        </div>
        <div
          class="rounded-[32px] bg-gradient-to-t from-[#000000] to-[#0E2825] border-[#FFFFFF4D] border-[0.5px] py-10 px-8"
        >
          <div class="mb-[6px]">
            <img :src="GroupThreeIcon" alt="" />
          </div>
          <div class="text-[40px] font-bold">98</div>
          <div class="text-[16px] text-white/70">Nombre d’inscris</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrevArrow from "@/assets/images/Group31362.svg";
import NextArrow from "@/assets/images/Group31363.svg";
import CardImgCours from "@/assets/images/html.png";
import CardImgLives from "@/assets/images/analyste-2.svg";
import CommentIcon from "@/assets/images/bulle-messages.svg";
import GroupIcon from "@/assets/images/bulle-nombre-utilisateurs.svg";
import PlayIcon from "@/assets/images/play-icone.svg";
import UpArrow from "@/assets/images/fleche-blanche-monter-icone.svg";
import URArrow from "@/assets/images/fleche-diagonal.svg";
import VideoIcon from "@/assets/images/camera-icone-vert.svg";
import GroupThreeIcon from "@/assets/images/Group31352.svg";
export default {
  name: "DashBoard",
  data() {
    return {
      series: [
        {
          name: "series1",
          data: [0, 15, 0, 25],
        },
      ],
      chartOptions: {
        colors: ["#D9F777"],
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
          enabledOnSeries: undefined,
        },
        stroke: {
          curve: "smooth",
        },

        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        yaxis: {
          labels: {
            formatter: function () {
              return "";
            },
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        fill: {
          colors: "#D9F777",
          type: "gradient",
          gradient: {
            gradientToColors: "#D9F77700",
            shadeIntensity: 0.3,
            opacityFrom: 1,
            opacityTo: 0.6,
            stops: [0, 90, 100],
          },
        },
      },
      percentage: 75,
      PrevArrow: PrevArrow,
      NextArrow: NextArrow,
      CardImg: CardImgCours,
      CardImgLives: CardImgLives,
      CommentIcon: CommentIcon,
      GroupIcon: GroupIcon,
      PlayIcon: PlayIcon,
      UpArrow: UpArrow,
      URArrow: URArrow,
      VideoIcon: VideoIcon,
      GroupThreeIcon: GroupThreeIcon,
    };
  },

  methods: {
 
  },
};
</script>

<style scoped>
.circle-bar-chart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 187px; /* Adjust the size as needed */
  height: 187px; /* Adjust the size as needed */
  background: transparent; /* Background color similar to the image */
  border-radius: 50%;
}

.circular-chart {
  max-width: 100%;
  max-height: 100%;
}

.circle-bg {
  fill: none;
  stroke: #2e3a46; /* Background stroke color */
  stroke-width: 3.8; /* Width of the inactive section */
}

.circle {
  fill: none;
  stroke-width: 5; /* Width of the active section */
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease;
  stroke: #ccea6c; /* Main color similar to the image */
}

.percentage {
  fill: #fff; /* Text color similar to the image */
  font-size: 0.5em;
  text-anchor: middle;
  font-weight: bold; /* Bold text similar to the image */
}
.mobile {
  display: none;
}
.desktop {
  display: block;
}
.right-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media screen and (max-width: 1919px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
  .right-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
