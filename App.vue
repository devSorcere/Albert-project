<template>
  <div class="relative w-full bg-[#020F11] text-white font-degular">
    <!-- Top Bar -->
    <div class="fixed top-0 left-0 w-full z-50 bg-[#0A1718] border-b border-[#FFFFFF1A]">
      <div class="max-w-screen-xl mx-auto px-5 py-4 flex justify-between items-center">
        <div class="text-2xl font-light">Dashboard</div>
        <div class="flex items-center gap-6">
          <!-- Search Icon -->
          <div class="top-bar-icon">
            <img :src="SearchIcon" alt="Search Icon" />
          </div>
          <!-- Notification Icon -->
          <div class="top-bar-icon">
            <img :src="NotifyIcon" alt="Notification Icon" />
          </div>
          <!-- Profile Menu -->
          <div class="top-bar-icon relative">
            <Menu as="div" class="relative inline-block">
              <div>
                <MenuButton class="flex items-center">
                  <img :src="Avatar" class="w-9 h-9 rounded-full" alt="User Avatar" />
                  <img :src="ArrowDown" class="ml-2" alt="Arrow Down Icon" />
                </MenuButton>
              </div>
              <MenuItems class="absolute right-0 mt-2 w-[349px] origin-top-right bg-[#0C181B] border border-[#3c3f79] rounded-[16px] shadow-lg">
                <MenuItem>
                  <div class="flex items-center p-4">
                    <img :src="Avatar" class="w-12 h-12 rounded-full mr-4" alt="User Avatar" />
                    <div>
                      <div class="text-xl font-bold">Marine Robert</div>
                      <div class="text-sm text-gray-400">Analyste en cybersécurité</div>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div class="p-4">
                    <div class="text-sm font-medium mb-2">Mon compte</div>
                    <div class="grid grid-cols-1 gap-2">
                      <div class="flex items-center gap-4">
                        <img :src="VideoIcon" class="w-5 h-5" alt="Video Icon" />
                        <div>Détails compte</div>
                      </div>
                      <div class="flex items-center gap-4">
                        <img :src="VideoIcon" class="w-5 h-5" alt="Video Icon" />
                        <div>Préférences</div>
                      </div>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div class="flex items-center p-4">
                    <img :src="VideoIcon" class="w-5 h-5" alt="Video Icon" />
                    <div class="text-base">Se déconnecter</div>
                  </div>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="fixed left-0 top-[78px] bottom-0 bg-[#0d191b] w-[327px] md:w-[260px] lg:w-[367px] px-5 py-4">
      <div class="flex items-center">
        <img :src="Logo" class="h-12 mx-auto" alt="Logo" />
      </div>
      <div class="text-xs uppercase text-center text-[#020F11] from-[#7971F5] to-[#020F11] bg-gradient-to-l bg-opacity-58 my-4 py-2 rounded-[32px]">COMPTE FORMATEUR</div>
      <div class="flex flex-col gap-4">
        <div v-for="item in Sidebar" :key="item.title" @click="() => OnActive(item.title)"
          :class="['py-3 px-5 flex items-center justify-between rounded-[31px] border-[0.5px]', active === item.title ? 'border-[#5f6768] text-white font-medium' : 'border-[#0d191b] text-[#aeb2b2]']">
          <div class="flex items-center gap-2">
            <img :src="active === item.title ? item.active : item.icon" class="w-5 h-5" alt="Sidebar Icon" />
            <div>{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="ml-[327px] md:ml-[260px] lg:ml-[367px] px-5 py-10">
      <!-- Content Section 1 -->
      <div class="mb-12">
        <div class="border border-[#FFFFFF4D] rounded-[32px] bg-gradient-to-l from-[#020F11] to-[#7971F5] text-white">
          <div class="p-8 flex items-center justify-between">
            <div>
              <div class="text-4xl font-bold">2 300 €</div>
              <div class="text-sm text-white/70">Mon solde actuel</div>
            </div>
            <div class="flex items-center gap-2 bg-[#7971F5] rounded-[16px] py-[11px] px-10">
              <img :src="UpArrow" class="w-5 h-5" alt="Up Arrow" />
              <div>Virer de l'argent</div>
            </div>
          </div>
          <hr class="border-[#30302f]" />
          <div class="p-8 flex items-center justify-between">
            <div class="flex gap-12">
              <div>
                <div class="text-3xl font-bold">6 000 €</div>
                <div class="text-xs text-white/70">Montant à venir</div>
              </div>
              <div>
                <div class="text-3xl font-bold">12 150 €</div>
                <div class="text-xs text-white/70">Montant en cours</div>
              </div>
            </div>
            <div class="border border-[#FFFFFF]/40 rounded-[19px] py-2 px-[21px] text-sm">
              Historique
            </div>
          </div>
        </div>
      </div>

      <!-- Content Section 2 -->
      <div class="mb-12">
        <div class="flex items-center justify-between mb-6">
          <div class="text-2xl font-light">Lives</div>
          <div class="flex items-center gap-2">
            <div class="text-lg font-medium">Tout voir</div>
            <img :src="PrevArrow" class="w-6 h-6" alt="Previous Arrow" />
            <img :src="NextArrow" class="w-6 h-6" alt="Next Arrow" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="item in lives" :key="item.id"
            class="border-[#7971F5] border-[0.5px] rounded-[32px] bg-[#0e1928] px-6 py-[22px]">
            <div class="relative">
              <img :src="item.image" class="h-72 w-full object-cover rounded-[32px]" alt="Live Image" />
              <div class="absolute bottom-0 right-0 p-4 text-right text-white">
                <div class="text-2xl font-bold">{{ item.date }}</div>
                <div class="text-sm font-medium">{{ item.session }}</div>
              </div>
            </div>
            <div class="mt-6 text-2xl font-light">{{ item.title }}</div>
            <div class="flex justify-between items-center mt-4">
              <div class="flex gap-2">
                <div class="flex items-center gap-2 bg-[#27303e] rounded-[19px] p-[3px]">
                  <img :src="CommentIcon" class="w-5 h-5" alt="Comment Icon" />
                  <div class="text-[14px] text-white/60 font-medium">{{ item.comments }}</div>
                </div>
                <div class="flex items-center gap-2 bg-[#27303e] rounded-[19px] p-[3px]">
                  <img :src="GroupIcon" class="w-5 h-5" alt="Group Icon" />
                  <div class="text-[14px] text-white/60 font-medium">{{ item.participants }}</div>
                </div>
              </div>
              <div class="border-[#35368a] border-[0.3px] rounded-[34px] text-sm py-2 px-[21px] bg-[#7971F5] items-center flex gap-2">
                <div class="font-medium font-degular">Démarrer le live</div>
                <img :src="PlayIcon" alt="Play Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Section 3 -->
      <div class="mb-12">
        <div class="flex items-center justify-between mb-6">
          <div class="text-2xl font-light">Formations</div>
          <div class="flex items-center gap-2">
            <div class="text-lg font-medium">Tout voir</div>
            <img :src="PrevArrow" class="w-6 h-6" alt="Previous Arrow" />
            <img :src="NextArrow" class="w-6 h-6" alt="Next Arrow" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in trainings" :key="item.id"
            class="border-[#7971F5] border-[0.5px] rounded-[32px] bg-[#0e1928] px-6 py-[22px]">
            <div class="relative">
              <img :src="item.image" class="h-72 w-full object-cover rounded-[32px]" alt="Training Image" />
              <div class="absolute bottom-0 right-0 p-4 text-right text-white">
                <div class="text-2xl font-bold">{{ item.date }}</div>
                <div class="text-sm font-medium">{{ item.time }}</div>
              </div>
            </div>
            <div class="mt-6 text-2xl font-light">{{ item.title }}</div>
            <div class="flex justify-between items-center mt-4">
              <div class="flex gap-2">
                <div class="flex items-center gap-2 bg-[#27303e] rounded-[19px] p-[3px]">
                  <img :src="CommentIcon" class="w-5 h-5" alt="Comment Icon" />
                  <div class="text-[14px] text-white/60 font-medium">{{ item.comments }}</div>
                </div>
                <div class="flex items-center gap-2 bg-[#27303e] rounded-[19px] p-[3px]">
                  <img :src="GroupIcon" class="w-5 h-5" alt="Group Icon" />
                  <div class="text-[14px] text-white/60 font-medium">{{ item.participants }}</div>
                </div>
              </div>
              <div class="border-[#35368a] border-[0.3px] rounded-[34px] text-sm py-2 px-[21px] bg-[#7971F5] items-center flex gap-2">
                <div class="font-medium font-degular">Démarrer la formation</div>
                <img :src="PlayIcon" alt="Play Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuItem, MenuButton, MenuItems } from '@headlessui/vue';

export default {
  components: {
    Menu,
    MenuItem,
    MenuButton,
    MenuItems,
  },
  data() {
    return {
      SearchIcon: require('@/assets/icons/search-icon.svg'),
      NotifyIcon: require('@/assets/icons/notify-icon.svg'),
      Avatar: require('@/assets/images/avatar.jpg'),
      ArrowDown: require('@/assets/icons/arrow-down.svg'),
      VideoIcon: require('@/assets/icons/video-icon.svg'),
      UpArrow: require('@/assets/icons/up-arrow.svg'),
      PrevArrow: require('@/assets/icons/prev-arrow.svg'),
      NextArrow: require('@/assets/icons/next-arrow.svg'),
      CommentIcon: require('@/assets/icons/comment-icon.svg'),
      GroupIcon: require('@/assets/icons/group-icon.svg'),
      PlayIcon: require('@/assets/icons/play-icon.svg'),
      Logo: require('@/assets/images/logo.png'),
      active: 'Dashboard',
      Sidebar: [
        { title: 'Dashboard', icon: require('@/assets/icons/dashboard-icon.svg'), active: require('@/assets/icons/dashboard-active-icon.svg') },
        { title: 'Lives', icon: require('@/assets/icons/live-icon.svg'), active: require('@/assets/icons/live-active-icon.svg') },
        { title: 'Formations', icon: require('@/assets/icons/training-icon.svg'), active: require('@/assets/icons/training-active-icon.svg') },
        { title: 'Statistiques', icon: require('@/assets/icons/stats-icon.svg'), active: require('@/assets/icons/stats-active-icon.svg') },
        { title: 'Aide', icon: require('@/assets/icons/help-icon.svg'), active: require('@/assets/icons/help-active-icon.svg') },
        { title: 'Paramètres', icon: require('@/assets/icons/settings-icon.svg'), active: require('@/assets/icons/settings-active-icon.svg') },
      ],
      lives: [
        { id: 1, image: require('@/assets/images/live1.jpg'), date: '12 JUN', session: 'Session 1', title: 'Introduction à la cybersécurité', comments: 24, participants: 45 },
        { id: 2, image: require('@/assets/images/live2.jpg'), date: '15 JUN', session: 'Session 2', title: 'Sécurité des réseaux', comments: 32, participants: 58 },
      ],
      trainings: [
        { id: 1, image: require('@/assets/images/training1.jpg'), date: '12 JUN', time: '9h - 12h', title: 'Formation sur le cloud computing', comments: 45, participants: 78 },
        { id: 2, image: require('@/assets/images/training2.jpg'), date: '15 JUN', time: '14h - 17h', title: 'Séminaire sur la cybersécurité', comments: 56, participants: 92 },
        { id: 3, image: require('@/assets/images/training3.jpg'), date: '17 JUN', time: '10h - 13h', title: 'Atelier sur la cryptographie', comments: 38, participants: 64 },
      ],
    };
  },
  methods: {
    OnActive(item) {
      this.active = item;
    },
  },
};
</script>

<style>
#app {
  box-sizing: border-box;
}
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
  dominant-baseline: middle;
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

@media screen and (max-width: 1920px) {
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
