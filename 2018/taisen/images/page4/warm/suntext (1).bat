@ECHO OFF&SetLocal ENABLEDELAYEDEXPANSION 
for %%c in (*.png) do (
   set "name=%%c"
   set "name=!name: (=!"
   set "name=!name:)=!"
   ren "%%c" "!name!" 
)



