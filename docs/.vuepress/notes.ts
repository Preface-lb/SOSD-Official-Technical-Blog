import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== 中文配置 (zh-CN) ======================= */

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/notes/',
  notes: [
    defineNoteConfig({
      dir: '',
      link: '/notes/',
      sidebar: 'auto', // 自动递归生成整个 notes 下的侧边栏
    }),
  ],
})

/* =================== 英文配置 (en-US，可选) ======================= */

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/notes/',
  notes: [
    defineNoteConfig({
      dir: '',
      link: '/en/notes/',
      sidebar: 'auto',
    }),
  ],
})
