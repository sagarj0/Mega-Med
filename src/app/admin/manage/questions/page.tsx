import react from 'react';
import SelectSubjectDropdown from '@/ui/questions/selectsubject';
import AddQuestionForm from '@/ui/questions/addquesform';

export default function Page() {
  return (
    <>
      <h1 className="bold text-2xl mb-4">
        Add Questions ...
      </h1>
      <div className="flex flex-col gap-8">
        <SelectSubjectDropdown />
        <AddQuestionForm />
      </div>
    </>
  );
}
