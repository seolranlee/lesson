<?php include 'header.php' ?>     
    
    <table>
        <?php foreach ($result as $item):?>

            <tr>
                <td><?php echo $item->num ?></td>
                <td><?php echo $item->name ?></td>
                <td><?php echo $item->age ?></td>
            </tr>

        <?php endforeach;?>   
    </table>

<?php include 'footer.php' ?>      
