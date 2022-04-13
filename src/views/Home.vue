<template>
  <div></div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { supabase } from "../supabase/init";
export default {
  name: "Home",
  components: {},
  setup() {
    // Create data / vars
    const data = ref([]);
    const dataLoaded = ref(null);

    // Get data
    const getData = async () => {
      try {
        let { data: workouts, error } = await supabase
          .from("workouts")
          .select("*");

        if (error) throw error;

        data.value = workouts;
        dataLoaded.value = true;

        console.log(data.value[0]);
      } catch (error) {
        console.warn(error);
      }
    };

    // Run data function
    getData();

    return { getData };
  },
};
</script>
