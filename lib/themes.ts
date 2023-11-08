type Color = {
    background: string;
    content?: string;
    focus?: string;
}
type Base = {
    '100': string;
    '200': string;
    '300': string;
    'content'?: string;
}
type Constructor = {
    primary: Color;
    secondary: Color;
    accent: Color;
    neutral: Color;
    info: Color;
    success: Color;
    warning: Color;
    error: Color;
    base: Base;
}

export default class DaisyUITheme {
    private readonly primary: Color
    private readonly secondary: Color
    private readonly accent: Color
    private readonly neutral: Color
    private readonly info: Color
    private readonly success: Color
    private readonly warning: Color
    private readonly error: Color
    private readonly base: Base

    private constructor({primary, secondary, accent, neutral, info, success, warning, error, base}: Constructor) {
        this.primary = primary;
        this.secondary = secondary;
        this.accent = accent;
        this.neutral = neutral;
        this.info = info;
        this.success = success;
        this.warning = warning;
        this.error = error;
        this.base = base;
    }


    public static from(theme: Constructor) {
        const themeInstance = new DaisyUITheme(theme);
        const primary = {
            primary: themeInstance.primary.background,
            primaryFocus: themeInstance.primary.focus,
            primaryContent: themeInstance.primary.content,
        }

        // Secondary
        const secondary = {secondary: themeInstance.secondary.background}
        themeInstance.secondary.focus && Object.assign(secondary, {secondaryFocus: themeInstance.secondary.focus})
        themeInstance.secondary.content && Object.assign(secondary, {secondaryContent: themeInstance.secondary.content})

        // Accent
        const accent = {accent: themeInstance.accent.background}
        themeInstance.accent.focus && Object.assign(accent, {accentFocus: themeInstance.accent.focus})
        themeInstance.accent.content && Object.assign(accent, {accentContent: themeInstance.accent.content})

        // Neutral
        const neutral = {neutral: themeInstance.neutral.background}
        themeInstance.neutral.focus && Object.assign(neutral, {neutralFocus: themeInstance.neutral.focus})
        themeInstance.neutral.content && Object.assign(neutral, {neutralContent: themeInstance.neutral.content})

        // Info
        const info = {info: themeInstance.info.background}
        themeInstance.info.focus && Object.assign(info, {infoFocus: themeInstance.info.focus})
        themeInstance.info.content && Object.assign(info, {infoContent: themeInstance.info.content})

        // Success
        const success = {success: themeInstance.success.background}
        themeInstance.success.focus && Object.assign(success, {successFocus: themeInstance.success.focus})
        themeInstance.success.content && Object.assign(success, {successContent: themeInstance.success.content})

        // Warning
        const warning = {warning: themeInstance.warning.background}
        themeInstance.warning.focus && Object.assign(warning, {warningFocus: themeInstance.warning.focus})
        themeInstance.warning.content && Object.assign(warning, {warningContent: themeInstance.warning.content})

        // Error
        const error = {error: themeInstance.error.background}
        themeInstance.error.focus && Object.assign(error, {errorFocus: themeInstance.error.focus})
        themeInstance.error.content && Object.assign(error, {errorContent: themeInstance.error.content})

        // Base
        const base = {
            'base-100': themeInstance.base['100'],
            'base-200': themeInstance.base['200'],
            'base-300': themeInstance.base['300'],
        }
        themeInstance.base.content && Object.assign(base, {'base-content': themeInstance.base.content})

        // Output
        return {
            ...primary,
            ...base,
            ...secondary,
            ...accent,
            ...neutral,
            ...info,
            ...success,
            ...warning,
            ...error,
        }

    }
}
