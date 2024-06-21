<template>
  <div class="pl-[367px] fixed w-full z-[1000] pr-5 pt-5 text-white">
    <div
      class="font-gelica flex justify-between rounded-[32px] w-full p-8 itmes-center bg-[#0A1718] border border-[#FFFFFF1A]"
    >
      <div class="text-[40px] font-light">Dashboard</div>
      <div class="flex gap-[16px] items-center">
        <div
          class="bg-[#162224] border-[#FFFFFF33] rounded-[18px] border-[0.5px] p-[18px] text-[#FFFFFF]"
        >
          <img :src="SearchIcon" alt="" />
        </div>
        <div
          class="bg-[#162224] border-[#FFFFFF33] rounded-[18px] border-[0.5px] p-[18px] text-[#FFFFFF]"
        >
          <img :src="NotifyIcon" alt="" />
        </div>
        <div
          class="bg-[#162224] flex border-[#FFFFFF33] rounded-[18px] border-[0.5px] p-[9px] text-[#FFFFFF]"
        >
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton class="flex">
                <img :src="Avatar" class="w-[37px]" alt="" />
                <img :src="ArrowDown" alt="" />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute -right-3 rounded-[16px] z-10 mt-4 w-[349px] origin-top-right border-[0.5px] border-[#3c3f79] bg-[#0C181B] focus:outline-none p-2 gap-2 grid grid-cols-1"
              >
                <MenuItem class="">
                  <div class="flex gap-4 p-4 rounded-[16px] bg-[#162224]">
                    <img :src="Avatar" alt="" />
                    <div>
                      <div class="text-[21px] font-gelica">Marine Robert</div>
                      <div class="text-[16px] font-degular font-medium">
                        Analyste en cybersécurité
                      </div>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem class="font-degular">
                  <div class="py-6 px-4 rounded-[16px] bg-[#162224]">
                    <div class="mb-[25px] text-[16px]">Mon compte</div>
                    <div class="grid grid-cols-1 pl-6 gap-[47px]">
                      <div class="flex gap-[27px] items-center">
                        <div>
                          <img class="w-5 h-5" :src="VideoIcon" alt="" />
                        </div>
                        <div class="text-[20px] text-white/60">Détails compte</div>
                      </div>
                      <div class="flex gap-[27px] items-center">
                        <div>
                          <img class="w-5 h-5" :src="VideoIcon" alt="" />
                        </div>
                        <div class="text-[20px] text-white/60">Préférences</div>
                      </div>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem class="font-degular">
                  <div class="flex p-4 gap-[27px] items-center">
                    <div>
                      <img class="w-5 h-5" :src="VideoIcon" alt="" />
                    </div>
                    <div class="text-[18px]">Se déconnecter</div>
                  </div>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoIcon from "@/assets/images/camera-icone-vert.svg";
import SearchIcon from '@/assets/images/loupe-icone.svg'
import NotifyIcon from "@/assets/images/colchete-icone.svg";
import ArrowDown from "@/assets/images/Group29129.svg";
import Avatar from "@/assets/images/avatar.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
export default {
  name: "TopBar",
  components: { Menu, MenuButton, MenuItem, MenuItems },
  data() {
    return {
      VideoIcon: VideoIcon,
      SearchIcon: SearchIcon,
      NotifyIcon: NotifyIcon,
      ArrowDown: ArrowDown,
      Avatar: Avatar,
    };
  },
};
</script>

<style scoped></style>
