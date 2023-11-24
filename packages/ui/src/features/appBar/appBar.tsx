import React from 'react'
import { H3, XStack, ButtonIcon } from 'tamagui'
import { useThemeSetting } from '@tamagui/next-theme'
import { ThemeToggle } from '@t4/ui/src/ThemeToggle'
import { List } from '@tamagui/lucide-icons'

type LmDashboardAppBarProps = Pick<LmDashboardShellProps, 'rightContent' | 'title'>

export function LmAppBar({ title, rightContent }: LmDashboardAppBarProps) {
    const themeSetting = useThemeSetting()
    return (
        <XStack
            position={'sticky' as 'absolute'}
            top={'$0'}
            zIndex={1100}
            elevation={'$5'}
            height={64}
            alignItems={'center'}
            paddingHorizontal={'$2'}
            justifyContent={'space-between'}
            backgroundColor={'$background'}
            space
        >
            <ThemeToggle
                icon={<List />}
                size={'$4'}
                circular
                chromeless
                onPress={() => {
                    themeSetting.toggle()
                }}
            />

            <H3 flexGrow={1}>{title}</H3>
            <ThemeToggle
                size={'$4'}
                circular
                chromeless
            />
            {rightContent}
        </XStack>
    )
}