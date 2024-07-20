"use client";
import { useAppTheme } from "@/contexts/theme";
import { IcBaselineLightMode, IcBaselineModeNight } from "@/uikits/icons";

function ThemeManager() {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <div className="themeManager notranslate">
      <div className="themeToggler">
        <section onClick={() => toggleTheme()} className={theme + "-defTheme"}>
          <small></small>

          <span className="lightIcon">
            <IcBaselineLightMode />
          </span>
          <span className="darkIcon">
            <IcBaselineModeNight />
          </span>
        </section>
      </div>
    </div>
  );
}

export default ThemeManager;
