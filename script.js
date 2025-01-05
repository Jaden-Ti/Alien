function changeColor()
{
    const PageTitle =document.getElementById('title-label');
    const ProfilePicture1 = document.getElementById("profile-pic-1");
    const TableHeader = document.getElementById("table-header")

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); //Generate Random Colour
    PageTitle.style.backgroundColor = randomColor;
    ProfilePicture1.style.borderColor = randomColor;
    TableHeader.style.backgroundColor = randomColor;

}