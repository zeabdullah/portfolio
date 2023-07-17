import { NextSeo } from 'next-seo'
import UnderConstruction from '@/components/UnderConstruction'

export default function RecipesPage() {
    return (
        <>
            <NextSeo
                title='Recipes | Abdullah Zeidan'
                description='Find snippets and recipes of code for inspiration or quick setup.'
            />
            <UnderConstruction />
        </>
    )
}
