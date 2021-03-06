<template>
  <div class="verse__root">
    <div
      v-for="(verse, index) in verseArray"
      :id="`verse-${index}`"
      :key="index"
      class="verse block_content has-shadow">
      <div class="verse__header">
        <div class="verse__index tag_index">
          {{ Number(index) }}
        </div>
        <div class="verse__header--right">
          <div class="verse__header_icon" @click="onClickAudioIcon(Number(index))">
            <MdVolumeHighIcon w="2em" h="2em" />

            <div class="tooltip" :class="{'show' : Number(clickedAudioIcon) === Number(index)}">
              <ul v-for="audio in audios" :key="audio.id">
                <li @click="onClickAudioItem(audio, Number(index))">
                  {{ audio.text }}
                </li>
              </ul>
            </div>
          </div>

          <div
            class="verse__header_icon"
            @click="doSetLastReadVerse({ surah: surahId, verse: Number(index) })">
            <MdBookmarkIcon w="2em" h="2em" />
          </div>

          <div
            v-if="isSupportWebShare"
            class="verse__header_icon"
            @click="shareVerse(verse, Number(index))">
            <MdShareIcon w="2em" h="2em" />
          </div>
        </div>
      </div>
      <div class="divider clearfix">
        <div class="verse__arabic font-arabic" dir="rtl">
          {{ verse }}
        </div>
      </div>
      <div v-if="settingShowTranslation" class="divider clearfix">
        <div class="verse__bold">
          <b>Terjemah:</b>
        </div>
        <div class="verse__translation">
          {{ getTranslation(index) }}
        </div>
      </div>
      <div v-if="settingShowTafsir" class="divider clearfix">
        <div class="verse__bold">
          <b>Tafsir dari Kemenag:</b>
        </div>
        <div class="verse__tafsir">
          {{ getTafsir(index) }}
        </div>
        <div class="verse__small">
          <i>Sumber: Aplikasi Quran Kementrian Agama Republik Indonesia</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

import MdShareIcon from 'vue-ionicons/dist/js/md-share'
import MdBookmarkIcon from 'vue-ionicons/dist/js/md-bookmark'
import MdVolumeHighIcon from 'vue-ionicons/dist/js/md-volume-high'
import MurotalConstant from '../constant/murotal'

const randomVerse = 1000000

@Component({
  components: {
    MdShareIcon,
    MdBookmarkIcon,
    MdVolumeHighIcon
  }
})
export default class VerseCard extends Vue {
  audios = MurotalConstant.availableAudio;
  clickedAudioIcon = randomVerse;
  timeout;

  @Prop({ type: [Object, Array], default: () => ({}) }) readonly verseArray!:
    | any
    | any[];
  @Prop({ type: Object, default: () => ({}) }) readonly translations!: any;
  @Prop({ type: Object, default: () => ({}) }) readonly tafsir!: any;
  @Prop({ type: Number, default: 0 }) readonly surahId!: number;

  @State surahFavorite;
  @State isSupportWebShare;
  @State settingShowTranslation;
  @State settingShowTafsir;

  @Action setLastReadVerse;
  @Action showNotification;
  @Action shareViaWebshare;

  onClickAudioIcon(verse) {
    if (this.timeout) clearTimeout(this.timeout)

    this.clickedAudioIcon = verse
    this.timeout = setTimeout(() => {
      this.clickedAudioIcon = randomVerse
    }, 5000)
  }

  onClickAudioItem(audioObj, verse) {
    if (audioObj.id === 'kemenag') {
      const hrefAudio = MurotalConstant.getAudioFromKemenag(
        this.surahId,
        verse
      )
      window.location.href = hrefAudio
    }
  }

  getTranslation(indexVerse) {
    return this.translations.id.text[indexVerse]
  }

  getTafsir(indexVerse) {
    return this.tafsir.id.kemenag.text[indexVerse]
  }

  doSetLastReadVerse(data) {
    this.setLastReadVerse(data)
    this.showNotification({
      title: 'Pesan Sukses',
      message: 'Ayat telah ditambahkan ke terakhir dibaca.'
    })
  }

  shareVerse(verse, index) {
    const data = {
      title: `QS ${this.surahId}:${index}`,
      text: `${verse}

        ${this.getTranslation(index)} (QS ${this.surahId}:${index})`,
      url: `https://quran-offline.netlify.com/${this.surahId}#verse-${index}`
    }
    this.shareViaWebshare(data)
  }
}
</script>

<style lang="scss" scoped>
.verse {
  text-align: left;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &--right {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &_icon {
      padding: 0 0.5em;
      position: relative;
    }
  }
  &__arabic {
    font-size: 2rem;
    width: 100%;
    float: right;
    text-align: right;
    margin-top: 0.25em;
  }
  &__translation {
    font-size: 1rem;
    width: 100%;
    font-style: italic;
    margin-top: 1.5em;
  }
  &__tafsir {
    font-size: 1rem;
    width: 100%;
    margin-top: 1.5em;
  }
  &__bold {
    font-weight: bold;
    margin-top: 1.5em;
    line-height: 1.5;
  }
  &__small {
    font-size: 0.8rem;
    margin-top: 1.5em;
    font-style: italic;
  }
}
.tooltip {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  background-color: #1a1a1a;
  color: #41b883;
  text-align: center;
  // border-radius: 6px;
  // padding: 1em 2em;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -50px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 15px 25px;
      border-bottom: 1px solid #41b883;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
.tooltip.show {
  visibility: visible;
  opacity: 1;
}
.tooltip {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  background-color: #1a1a1a;
  color: #41b883;
  text-align: center;
  // border-radius: 6px;
  // padding: 1em 2em;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -50px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 15px 25px;
      border-bottom: 1px solid #41b883;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
.tooltip.show {
  visibility: visible;
  opacity: 1;
}
</style>
