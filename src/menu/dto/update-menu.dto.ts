import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMenuDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string


    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    item: string;

    @IsString()
    @ApiProperty()
    size: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    price: string;



    @IsString()
    @ApiProperty()
    image: string;

}