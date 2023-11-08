import {Heading1, Text} from '@/components/atoms/typography';
import {FlexStack} from '@/components/layouts/stacks';

export default function Home() {
   return (
      <main className='h-min-screen w-screen'>
         <FlexStack className={'prose p-1 sm:p-2 md:p-3'}>
            <Heading1>Start up template</Heading1>
            <Text>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut beatae dolore
               eveniet iste modi molestias, nostrum numquam provident repellat reprehenderit
               sapiente voluptates.
            </Text>
         </FlexStack>
      </main>
   );
}
