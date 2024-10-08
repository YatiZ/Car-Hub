"use client"
import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { CustomFilterProps } from '@/types'
import Image from 'next/image'
import { updateSearchParams } from '@/utils'

export default function CustomFilter<T>({
    options,
    setFilter,
  }: CustomFilterProps<T>) {
    const [selected, setSelected] = useState(options[0]);


    // const handleUpdateParams = (e:{title:string, value: string})=>{
    //     const newPathName = updateSearchParams(title, e.value.toLowerCase())

    //     router.push(newPathName)
    // }
  return (
    <div>
        <div className="w-fit">
            <Listbox value={selected} onChange={(e)=> {setSelected(e); setFilter(e.value as unknown as T);}}>
                <div className="relative w-fit z-10">
                    <Listbox.Button className="custom-filter__btn">
                        <span className='block truncate'>
                            {selected.title}
                        </span>
                        <Image src="/chevron-up-down.svg" width={20} height={20} className='ml-4 object-contain' alt='chevron up down'/>
                    </Listbox.Button>
                    <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
                        <Listbox.Options className='custom-filter__options'>
                           {options.map((option)=>(
                            <Listbox.Option key={option.title} value={option} className={({active})=>`cursor-default relative select-none py-2 px-4 ${active? 'bg-primary-blue text-white':'text-gray-900'}`}>
                                {({selected})=>(
                                    <span className={`block truncate ${selected ? 'font-extrabold':'font-normal'}`}>{option.title}</span>
                                )}
                            </Listbox.Option>
                           ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    </div>
  )
}

