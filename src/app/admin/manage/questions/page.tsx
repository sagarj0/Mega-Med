import react from 'react';
import AddQuestionForm from '@/ui/questions/addquesform';
import Header from '@/ui/questions/header';

export default function Page() {
  return (
    <main className=" h-full w-full flex flex-col items-center gap-16">
      <Header />
      
        <AddQuestionForm />
      
    </main>
  );
}
