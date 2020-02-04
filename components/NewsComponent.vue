<template>
    <div class="flex items-center px-3 py-5 border-b-2">
       <div class="mx-5 font-extrabold">
           <p>{{ score }} </p>
       </div>
       <div>
           <a :href="url" class="text-sm font-bold" target="_blank">{{ title }}</a>
           <p class="text-xs">by <span class="underline">{{ by }}</span> 
                {{ $moment.duration($moment().diff($moment.unix(time))).humanize() }}  ago | <span class="underline text-gray-800"> 
                {{ kids.length }} comments </span>
            </p>
       </div>
    </div>
</template>

<script>
export default {
    props:['title', 'url', 'by','kids', 'time', 'score']
}
</script>
