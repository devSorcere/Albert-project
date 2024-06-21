<template>
  <div class="fixed px-5 py-5">
    <div
      class="min-h-[calc(100vh-40px)] bg-[#0d191b] w-[327px] max-w-[327px] rounded-[32px] border-1 border-[#FFFFFF1A] flex flex-col"
    >
      <div class="py-[21.5px]"><img :src="Logo" class="mx-auto" alt="" /></div>
      <div
        class="bg-gradient-to-l text-center text-white from-[#020F11] via-[#7971F5] to-[#020F11] bg-opacity-[58%] text-[14px] uppercase py-[7px] font-degular font-medium"
      >
        COMPTE FORMATEUR
      </div>
      <div class="flex flex-col px-[15px] pb-4 justify-between flex-1 mt-6">
        <div class="w-full px-2">
          <div class="grid grid-cols-1">
            <div class="text-[#FFFFFF] text-[16px] mb-3">Cours</div>
            <div class="grid grid-cols-1 gap-4">
              <div
                @click="() => OnActive(item.title)"
                v-for="item in Sidebar"
                :key="item.title"
                :class="{
                  'flex gap-[26px] px-6 py-[14px] items-center border-[0.5px] rounded-[31px]': true,
                  'border-[#5f6768] text-white font-medium': this.active == item.title,
                  'border-[#0d191b] text-[#aeb2b2]': this.active !== item.title,
                }"
              >
                <div>
                  <img
                    class="w-5 h-5"
                    :src="item.icon"
                    alt=""
                    v-if="this.active !== item.title"
                  />
                  <img
                    class="w-5 h-5"
                    :src="item.active"
                    alt=""
                    v-if="this.active == item.title"
                  />
                </div>
                <div class="text-[20px] text-white">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full relative rounded-[16px] bg-[#192527] gap-[6px] flex flex-col items-center justify-center py-4"
        >
          <img
            :src="QuestionIcon"
            alt=""
            class="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
          <div class="max-w-[156px] text-white text-center text-[14px] leading-[17px]">
            Vous avez une question ou besoin de réponses ?
          </div>
          <div
            class="px-[13px] py-[6px] text-[14px] text-white border border-[#ffffff66] rounded-[19px] font-medium"
          >
            Aide et FAQ
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/Aideprojet-logo-academy.svg";
import DashBoardIconActive from "@/assets/images/menu-icone-active.svg";
import CameraIcon from "@/assets/images/camera-icone.svg";
import CoursIcon from "@/assets/images/cours-video.svg";
import PlaningIcon from "@/assets/images/calendrier-icone.svg";
import PaymentsIcon from "@/assets/images/facture-icone.svg";
import ProfileIcon from "@/assets/images/utilisateur.svg";
import VideoIcon from "@/assets/images/camera-icone-vert.svg";
export default {
  name: "SideBar",
  data() {
    return {
      Logo: Logo,
      active: "Dashboard",
      Sidebar: [
        { icon: DashBoardIconActive, title: "Dashboard", active: DashBoardIconActive },
        { icon: CameraIcon, title: "Lives", active: VideoIcon },
        { icon: CoursIcon, title: "Cours", active: DashBoardIconActive },
        { icon: PlaningIcon, title: "Mon planning", active: DashBoardIconActive },
        { icon: PaymentsIcon, title: "Paiements", active: DashBoardIconActive },
        { icon: ProfileIcon, title: "Mon profile", active: DashBoardIconActive },
      ],
    };
  },
  methods: {
    OnActive(active) {
      this.active = active;
    },
  },
};
</script>

<style scoped></style>
