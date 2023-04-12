export interface IButton {
    title: string,
    variant?: string,
    type?: string,
    onClick?: () => void
}

export interface IButtonStyled {
    variant: string
}