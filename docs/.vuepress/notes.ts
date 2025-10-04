import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

/* =================== 中文配置 (zh-CN) ======================= */

export const zhNotes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [
    defineNoteConfig({
      dir: "LearningRoute",
      link: "/LearningRoute/",
      sidebar: "auto",
    }),

    defineNoteConfig({
      dir: "Molihua",
      link: "/Molihua/",
      sidebar: "auto",
    }),
    defineNoteConfig({
      dir: "About",
      link: "/About/",
      sidebar: "auto",
    }),
        defineNoteConfig({
      dir: "ComputerFundamentals",
      link: "/ComputerFundamentals/",
      sidebar: "auto",
    }),
  ],
});

/* =================== 英文配置 (en-US，可选) ======================= */

export const enNotes = defineNotesConfig({
  dir: "en/notes",
  link: "/en/",
  notes: [
    defineNoteConfig({
      dir: "LearningRoute",
      link: "/LearningRoute/",
      sidebar: "auto",
    }),
    defineNoteConfig({
      dir: "Molihua",
      link: "/Molihua/",
      sidebar: "auto",
    }),
    defineNoteConfig({
      dir: "About",
      link: "/About/",
      sidebar: "auto",
    }),
        defineNoteConfig({
      dir: "ComputerFundamentals",
      link: "/ComputerFundamentals/",
      sidebar: "auto",
    }),
  ],
});
