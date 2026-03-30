import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 모든 페이지 공통 컴포넌트
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      //GitHub: "https://github.com/jackyzha0/quartz",
      //"Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// 개별 노트 페이지 레이아웃
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [
    // Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [], // 이 부분을 빈 괄호로 정확히 닫아주어야 합니다.
}

// 태그나 폴더 목록 페이지 레이아웃
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Search(),   // 목록 페이지에서도 안 보이게 하려면 여기도 주석 처리하세요.
    // Component.Darkmode(), // 목록 페이지에서도 안 보이게 하려면 여기도 주석 처리하세요.
  ],
  right: [],
}