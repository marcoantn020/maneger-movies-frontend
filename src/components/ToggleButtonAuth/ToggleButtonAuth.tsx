import {ButtonAuth, Wrapper} from "./styles.ts";

export type Tab = 'primary' | 'secondary';

interface ToggleAuthProps {
    value: Tab;
    onChange: (next: Tab) => void;
    labelPrimary: string;
    labelSecondary: string;
}

export function ToggleAuth ({ value, onChange, labelSecondary, labelPrimary }: ToggleAuthProps) {
    return (
        <Wrapper>
            <ButtonAuth
                $active={value === 'primary'}
                onClick={() => onChange('primary')}
            >
                {labelPrimary}
            </ButtonAuth>

            <ButtonAuth
                $active={value === 'secondary'}
                onClick={() => onChange('secondary')}
            >
                {labelSecondary}
            </ButtonAuth>
        </Wrapper>
    );
};