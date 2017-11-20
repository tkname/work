@ECHO OFF&SetLocal ENABLEDELAYEDEXPANSION 
for %%c in (*.txt) do (
   set "name=%%c"
   set "name=!name: (=!"
   set "name=!name:)=!"
   ren "%%c" "!name!" 
)



