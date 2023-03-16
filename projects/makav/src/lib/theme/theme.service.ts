import { Injectable } from "@angular/core";
import { Theme, purple, ocean, primary } from "./theme";

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    private active: Theme = purple;
    private availableThemes: Theme[] = [purple];

    getAvailableThemes(): Theme[] {
        return this.availableThemes;
    }

    getActiveTheme(): Theme {
        return this.active;
    }

    setPrimaryTheme(): void {
        this.setActiveTheme(primary);
    }

    setPurpleTheme(): void {
        this.setActiveTheme(purple);
    }

    setOceanTheme(): void {
        this.setActiveTheme(ocean);
    }

    setActiveTheme(theme: Theme): void {
        this.active = theme;
        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(property, this.active.properties[property]
            );
        });
    }
}